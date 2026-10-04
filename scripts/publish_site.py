#!/usr/bin/env python3
"""Sync Google sources, rebuild the site, and publish it to GitHub Pages.

Run in Positron with the editor's Run button, or from a terminal:
    python3 scripts/publish_site.py "Refresh recruiting data"
"""

from __future__ import annotations

import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent.parent
SITE_PATHS = [
    "FPCRecruiting-source.html",
    "FPCRecruiting.html",
    "app.js",
    "styles.css",
    "assets",
    "data",
    "dist",
    "build-standalone.py",
    "scripts/publish_site.py",
    "scripts/sync-google-sources.py",
    "scripts/publish-site.sh",
    "README.md",
]


def run(*command: str, check: bool = True) -> subprocess.CompletedProcess[str]:
    return subprocess.run(command, cwd=ROOT, check=check, text=True)


def main() -> None:
    message = " ".join(sys.argv[1:]) or "Refresh recruiting data from Google sources"
    run(sys.executable, "scripts/sync-google-sources.py")
    run(sys.executable, "build-standalone.py")
    run("git", "add", *SITE_PATHS)

    diff = run("git", "diff", "--cached", "--quiet", check=False).returncode
    if diff == 0:
        print("No publishable site changes found; nothing to push.")
        return
    if diff != 1:
        raise RuntimeError("Unable to determine whether site changes are staged.")

    run("git", "commit", "-m", message)
    run("git", "push")
    print("Published. GitHub Pages will update shortly:")
    print("https://nickblum1130.github.io/FPC_Recruiting_Hub/")


if __name__ == "__main__":
    main()
