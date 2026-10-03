"""Build a one-file version of the FPC recruiting app for sharing."""

from base64 import b64encode
from pathlib import Path


ROOT = Path(__file__).parent
ASSETS = {
    "fpc-bulldog.png": "image/png",
    "brian-gunter.jpg": "image/jpeg",
    "ehimen-ajede.jpg": "image/jpeg",
    "garrett-tucker.jpg": "image/jpeg",
    "hayden-powell.jpg": "image/jpeg",
    "logan-jacobelli.jpg": "image/jpeg",
    "lucas-siharaj.jpg": "image/jpeg",
    "reagan-melland.jpg": "image/jpeg",
}


def data_url(filename: str, mime_type: str) -> str:
    encoded = b64encode((ROOT / "assets" / filename).read_bytes()).decode("ascii")
    return f"data:{mime_type};base64,{encoded}"


def inline_assets(source: str) -> str:
    for filename, mime_type in ASSETS.items():
        source = source.replace(f"assets/{filename}", data_url(filename, mime_type))
    return source


page = inline_assets((ROOT / "FPCRecruiting.html").read_text())
styles = inline_assets((ROOT / "styles.css").read_text())
script = inline_assets((ROOT / "app.js").read_text())
page = page.replace('<link rel="stylesheet" href="styles.css" />', f"<style>{styles}</style>")
page = page.replace('<script src="app.js"></script>', f"<script>{script}</script>")
(ROOT / "FPCRecruiting-Share.html").write_text(page)
