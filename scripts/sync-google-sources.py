#!/usr/bin/env python3
"""Pull the public FPC source documents and generate site data/assets.

The exports are fetched only while this command runs. Neither document is
copied into the repository and no Google credential is stored in the site.
"""

from __future__ import annotations

import json
import re
import tempfile
import urllib.request
from pathlib import Path
from shutil import copyfileobj
from xml.etree import ElementTree as ET
from zipfile import ZipFile


ROOT = Path(__file__).resolve().parent.parent
SHEET_EXPORT = "https://docs.google.com/spreadsheets/d/1BxCZrYn_CI-f5hlLCAKEHB645Ww8Y6e9/export?format=xlsx"
SLIDES_EXPORT = "https://docs.google.com/presentation/d/1NxvVnwCA0WYOXMjQHDwsU-jAQkIh-ir0yfvMcCtUJ5E/export/pptx"
XLSX_NS = {"x": "http://schemas.openxmlformats.org/spreadsheetml/2006/main", "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships"}
PPT_NS = {"a": "http://schemas.openxmlformats.org/drawingml/2006/main", "r": "http://schemas.openxmlformats.org/package/2006/relationships"}
FEATURED_IMAGES = {
    "Ehimen Ajede": "ehimen-ajede.jpg",
    "Logan Jacobelli": "logan-jacobelli.jpg",
    "Lucas Siharaj": "lucas-siharaj.jpg",
    "Brian Gunter": "brian-gunter.jpg",
    "Garrett Tucker": "garrett-tucker.jpg",
    "Hayden Powell": "hayden-powell.jpg",
    "Reagan Melland": "reagan-melland.jpg",
}


def download(url: str, destination: Path) -> None:
    request = urllib.request.Request(url, headers={"User-Agent": "FPC-Recruiting-Sync/1.0"})
    with urllib.request.urlopen(request, timeout=60) as response, destination.open("wb") as output:
        copyfileobj(response, output)


def column(reference: str) -> str:
    return re.match(r"[A-Z]+", reference).group(0)


def string(value: str) -> str:
    return value.strip().replace("\u2019", "'")


def number_text(value: str) -> str:
    if not value:
        return ""
    try:
        number = float(value)
        return str(int(number)) if number.is_integer() else f"{number:g}"
    except ValueError:
        return value


def phone(value: str) -> str:
    digits = re.sub(r"\D", "", number_text(value))
    if len(digits) == 10:
        return f"{digits[:3]}-{digits[3:6]}-{digits[6:]}"
    return ""


def class_year(value: str, fallback: str) -> str:
    candidate = number_text(value)
    return candidate if re.fullmatch(r"20\d{2}", candidate) else fallback


def clean_name(value: str) -> str:
    return re.sub(r"\s+", " ", value.lstrip("* ").strip())


def key(value: str) -> str:
    return re.sub(r"[^a-z]", "", value.lower())


def load_sheet(path: Path) -> list[dict[str, str]]:
    with ZipFile(path) as archive:
        shared_root = ET.fromstring(archive.read("xl/sharedStrings.xml"))
        shared = ["".join(node.text or "" for node in item.findall(".//x:t", XLSX_NS)) for item in shared_root.findall("x:si", XLSX_NS)]
        workbook = ET.fromstring(archive.read("xl/workbook.xml"))
        rels = ET.fromstring(archive.read("xl/_rels/workbook.xml.rels"))
        targets = {item.attrib["Id"]: item.attrib["Target"] for item in rels}
        merged: dict[str, tuple[int, dict[str, str]]] = {}

        for sheet in workbook.findall(".//x:sheet", XLSX_NS):
            title = sheet.attrib["name"]
            sheet_id = sheet.attrib["{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id"]
            xml_path = "xl/" + targets[sheet_id]
            root = ET.fromstring(archive.read(xml_path))
            fallback = re.search(r"20(26|27|28|29)", title)
            fallback_year = f"20{fallback.group(1)}" if fallback else ""
            priority = 3 if fallback_year else (2 if title == "Master Roster" else 1)
            headers: dict[str, str] = {}

            for row in root.findall(".//x:sheetData/x:row", XLSX_NS):
                values: dict[str, str] = {}
                for cell in row.findall("x:c", XLSX_NS):
                    value = cell.findtext("x:v", default="", namespaces=XLSX_NS)
                    if cell.attrib.get("t") == "s" and value:
                        value = shared[int(value)]
                    values[column(cell.attrib["r"])] = string(value)
                labels = {value.lower(): cell for cell, value in values.items() if value}
                if any(label in labels for label in ("player", "player ")):
                    headers = labels
                    continue
                name_cell = headers.get("player") or headers.get("player ")
                if not name_cell or not values.get(name_cell):
                    continue
                name = clean_name(values[name_cell])
                if name.lower() == "player" or len(name) < 3:
                    continue
                player_key = key(name)
                record = {
                    "name": name,
                    "classYear": class_year(values.get(headers.get("class", ""), ""), fallback_year),
                    "position": values.get(headers.get("pos", ""), ""),
                    "height": values.get(headers.get("ht", ""), ""),
                    "weight": values.get(headers.get("wt", ""), ""),
                    "gpa": number_text(values.get(headers.get("gpa", ""), "")),
                    "phone": phone(values.get(headers.get("cell", ""), "")),
                    "handle": values.get(headers.get("twitter", ""), "").lstrip("@"),
                    "hudl": values.get(headers.get("hudl link", ""), ""),
                    "note": values.get(headers.get("offers", headers.get("offers-multi sport-awards", "")), ""),
                    "act": number_text(values.get(headers.get("act", ""), "")),
                    "sat": number_text(values.get(headers.get("sat", ""), "")),
                }
                current = merged.get(player_key)
                if not current or priority >= current[0]:
                    old = current[1] if current else {}
                    merged[player_key] = (priority, {field: record[field] or old.get(field, "") for field in record})

    players = []
    for _, record in merged.values():
        if not record["classYear"] or not record["position"]:
            continue
        record["height"] = record["height"] or "Not listed"
        record["weight"] = f'{record["weight"]} lbs' if record["weight"] else "Not listed"
        record["gpa"] = record["gpa"] or "—"
        record["hudl"] = record["hudl"] if record["hudl"].startswith("http") else ""
        record["x"] = f'https://x.com/{record.pop("handle")}' if record["handle"] else ""
        note = record.pop("note") or "FPC roster profile."
        record["note"] = f"Source note: {note}" if note and note != "FPC roster profile." else note
        tests = [f"ACT {record.pop('act')}" if record["act"] else "", f"SAT {record.pop('sat')}" if record["sat"] else ""]
        record["stats"] = " · ".join(test for test in tests if test) or "No additional testing or game stats listed."
        record["image"] = f'assets/{FEATURED_IMAGES[record["name"]]}' if record["name"] in FEATURED_IMAGES else ""
        record["tags"] = ["Roster", record["position"]]
        players.append(record)
    return sorted(players, key=lambda player: (player["classYear"], player["name"]))


def sync_featured_images(path: Path) -> None:
    with ZipFile(path) as archive:
        for slide_number in range(1, 16):
            slide = ET.fromstring(archive.read(f"ppt/slides/slide{slide_number}.xml"))
            text = " ".join(node.text or "" for node in slide.findall(".//a:t", PPT_NS)).lower()
            featured = next((name for name in FEATURED_IMAGES if all(part.lower() in text for part in name.split())), None)
            if not featured:
                continue
            rels = ET.fromstring(archive.read(f"ppt/slides/_rels/slide{slide_number}.xml.rels"))
            images = [item.attrib["Target"].replace("../", "ppt/") for item in rels if item.attrib.get("Type", "").endswith("/image") and item.attrib["Target"].lower().endswith((".jpg", ".jpeg"))]
            if images:
                (ROOT / "assets" / FEATURED_IMAGES[featured]).write_bytes(archive.read(images[0]))


def main() -> None:
    with tempfile.TemporaryDirectory(prefix="fpc-recruiting-") as directory:
        temporary = Path(directory)
        workbook = temporary / "source.xlsx"
        presentation = temporary / "source.pptx"
        download(SHEET_EXPORT, workbook)
        download(SLIDES_EXPORT, presentation)
        players = load_sheet(workbook)
        sync_featured_images(presentation)
    (ROOT / "data").mkdir(exist_ok=True)
    output = "// Generated by scripts/sync-google-sources.py. Do not edit by hand.\nwindow.FPC_PLAYERS = " + json.dumps(players, indent=2, ensure_ascii=False) + ";\n"
    (ROOT / "data" / "players.js").write_text(output)
    print(f"Synced {len(players)} players from Google Sheets and featured images from Google Slides.")


if __name__ == "__main__":
    main()
