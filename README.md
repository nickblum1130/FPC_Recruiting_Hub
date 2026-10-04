# FPC Football Recruiting Hub

The repository is ready for GitHub Pages. The deployment workflow publishes the static site in `dist/` after each push to `main`. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The published site will be available at `https://nickblum1130.github.io/FPC_Recruiting_Hub/`.

`FPCRecruiting.html` remains available as a single, self-contained file for sharing by download. Coaches should open it in Chrome, Safari, or Edge; Google Drive's in-browser preview does not run the app's interactive JavaScript.

## Update and publish from Terminal

Edit the source files (`FPCRecruiting-source.html`, `app.js`, `styles.css`, and `assets/`), then run:

```bash
./scripts/publish-site.sh "Update recruiting information"
```

The command rebuilds the Pages bundle in `dist/`, commits only the site files, pushes them to `main`, and triggers the GitHub Pages deployment. It does not place Google credentials in the repository or public site.

## Included workflow

- Search and filter prospects by recruiting class and position.
- Open concise profile cards for supplied measurables, GPA, notes, film, X profile, and athlete contact actions.
- Contact the head coach or recruiting coordinator directly from the page.

The source documents contain fields that appear to have been edited over multiple recruiting cycles. The spreadsheet is the source for roster data, contacts, profile links, measurables, academics, and recruiting notes; the presentation supplies featured-player photos and bios. Confirm recruiting status, eligibility, and contact preferences with the FPC recruiting coordinator before publishing publicly.
