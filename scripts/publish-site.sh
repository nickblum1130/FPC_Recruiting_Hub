#!/usr/bin/env bash
# Rebuild and publish the FPC Recruiting Hub to GitHub Pages.
# Usage: ./scripts/publish-site.sh ["commit message"]

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$project_dir"

python3 build-standalone.py

# Stage only files that form the published site or its editable source. This
# avoids accidentally committing unrelated files a user may have locally.
git add \
  FPCRecruiting-source.html \
  FPCRecruiting.html \
  app.js \
  styles.css \
  assets \
  dist \
  build-standalone.py

if git diff --cached --quiet; then
  echo "No publishable site changes found; nothing to push."
  exit 0
fi

commit_message="${1:-Update recruiting site}"
git commit -m "$commit_message"
git push

echo "Published. GitHub Pages will update shortly:"
echo "https://nickblum1130.github.io/FPC_Recruiting_Hub/"
