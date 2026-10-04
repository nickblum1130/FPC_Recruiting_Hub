#!/usr/bin/env bash
# Compatibility shortcut for the Python publisher.
# Usage: ./scripts/publish-site.sh ["commit message"]

set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
exec python3 "$project_dir/scripts/publish_site.py" "$@"
