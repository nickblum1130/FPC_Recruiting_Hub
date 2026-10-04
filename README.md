# FPC Football Recruiting Hub

The repository is ready for GitHub Pages. The deployment workflow publishes the static site in `dist/` after each push to `main`. In the GitHub repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The published site will be available at `https://nickblum1130.github.io/FPC_Recruiting_Hub/`.

`FPCRecruiting.html` remains available as a single, self-contained file for sharing by download. Coaches should open it in Chrome, Safari, or Edge; Google Drive's in-browser preview does not run the app's interactive JavaScript.

## Update and publish from Terminal

Run this command from the project folder:

```bash
./scripts/publish-site.sh "Update recruiting information"
```

The command downloads the current public [recruiting spreadsheet](https://docs.google.com/spreadsheets/d/1BxCZrYn_CI-f5hlLCAKEHB645Ww8Y6e9/edit?gid=1778590561#gid=1778590561) and [recruiting presentation](https://docs.google.com/presentation/d/1NxvVnwCA0WYOXMjQHDwsU-jAQkIh-ir0yfvMcCtUJ5E/edit?slide=id.p#slide=id.p), regenerates player data and featured images, rebuilds `dist/`, commits the site files, pushes them to `main`, and triggers the GitHub Pages deployment. It does not place Google credentials or source-document copies in the repository.

The source documents must remain accessible by Google export link for the terminal sync to work.

## Included workflow

- Search and filter prospects by recruiting class and position.
- Open concise profile cards for supplied measurables, GPA, notes, film, X profile, and athlete contact actions.
- Contact the head coach or recruiting coordinator directly from the page.

The source documents contain fields that appear to have been edited over multiple recruiting cycles. The spreadsheet is the source for roster data, contacts, profile links, measurables, academics, and recruiting notes; the presentation supplies featured-player photos and bios. Confirm recruiting status, eligibility, and contact preferences with the FPC recruiting coordinator before publishing publicly.
