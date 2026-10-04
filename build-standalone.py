"""Build a one-file version of the FPC recruiting app for sharing."""

from base64 import b64encode
from pathlib import Path
from shutil import copy2


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


source_page = (ROOT / "FPCRecruiting-source.html").read_text()
source_styles = (ROOT / "styles.css").read_text()
source_script = (ROOT / "app.js").read_text()

page = inline_assets(source_page)
styles = inline_assets(source_styles)
script = inline_assets(source_script)
page = page.replace('<link rel="stylesheet" href="styles.css" />', f"<style>{styles}</style>")
page = page.replace('<script src="app.js"></script>', f"<script>{script}</script>")
(ROOT / "FPCRecruiting.html").write_text(page)
(ROOT / "FPCRecruiting-Share.html").write_text(page)

# GitHub Pages receives this ordinary static-site bundle from the deployment
# workflow. Keep it in sync with the editable source files above.
DIST = ROOT / "dist"
DIST_ASSETS = DIST / "assets"
DIST_ASSETS.mkdir(parents=True, exist_ok=True)
(DIST / "index.html").write_text(source_page)
(DIST / "styles.css").write_text(source_styles)
(DIST / "app.js").write_text(source_script)
for filename in ASSETS:
    copy2(ROOT / "assets" / filename, DIST_ASSETS / filename)

print("Built standalone share files and the GitHub Pages bundle in dist/.")
