# Slides as code

Reusable Vite + [reveal.js](https://revealjs.com/) starter for talk decks. Branding is intentionally neutral—set CSS variables and add assets per talk.

**Live deck (after Pages is enabled):** [https://jrabbott.github.io/slides-as-code/](https://jrabbott.github.io/slides-as-code/)

## Requirements

- **Node.js 22+** (see `.nvmrc`). Prefer `npm ci` so the lockfile is respected.

## Run locally

```bash
npm ci
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/slides-as-code/`).

To check the production build:

```bash
npm run build
npm run preview
```

Dependency audit (also runs in CI):

```bash
npm run audit
```

## Present

1. Start with `npm run dev` (or open the live Pages URL).
2. Click the slides, then use arrow keys / space to navigate.
3. Press `F` for fullscreen, `S` for speaker notes, `Esc` for overview.
4. Slide numbers and URL hashes are enabled so you can deep-link to a slide.

Speaker notes in `<aside class="notes">` are author-controlled HTML rendered by reveal.js in the speaker view. Treat them as trusted content only—do not paste untrusted markup into notes.

## New talk checklist

1. Use this repo as a GitHub template (Settings → **Template repository**) or clone it.
2. Rename the package in `package.json` and set `base` in `vite.config.js` to `/<new-repo>/`.
3. Replace title, meta description, speakers, and sample slides in `index.html`.
4. Customize brand tokens in `src/style.css` (`--ink`, `--accent`, etc.) and add logos under `public/assets/` if you need them (`.logo` / `.logo-tl` slots are ready).
5. In the new repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Extra layout classes you can copy into `index.html`: `slide-gallery`, `slide-modes`, `slide-section.section-alt`, `split-body`.

## CI and publish

Shared quality gate lives in `.github/actions/build` (`npm ci`, audit, Vite build, `dist/` smoke check).

- **CI** (`.github/workflows/ci.yml`) runs that action on pull requests.
- **CD** (`.github/workflows/cd.yml`) runs the same action on pushes to `main` (or `workflow_dispatch`), uploads `dist/`, and deploys to GitHub Pages.

Dependabot watches npm and GitHub Actions weekly.

## Scaffold

Vite + reveal.js with DM Sans, brand-neutral slide layouts, and project Pages base path `/slides-as-code/`.
