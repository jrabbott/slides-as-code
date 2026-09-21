# Slides as code

Reusable Vite + [reveal.js](https://revealjs.com/) starter for talk decks. The default theme is tuned for readability (Atkinson Hyperlegible, solid paper surface, quiet motion)—set CSS variables and add assets per talk.

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
5. Fragments advance with the same keys; code blocks can step line ranges via `data-line-numbers`.

Speaker notes in `<aside class="notes">` are author-controlled HTML rendered by reveal.js in the speaker view. Treat them as trusted content only—do not paste untrusted markup into notes.

## New talk checklist

1. Use this repo as a GitHub template (Settings → **Template repository**) or clone it.
2. Rename the package in `package.json` to match the new repo name (local `vite` base falls back to that name).
3. CI/CD sets `BASE_PATH` from the GitHub repository name automatically—no `vite.config.js` edit required for project Pages.
4. Replace title, meta description, speakers, and sample slides in `index.html`.
5. Customize brand tokens in `src/style.css` (`--ink`, `--accent`, spacing vars, etc.).
6. In the new repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

### Layout classes in the sample deck

| Class | Use |
| --- | --- |
| `slide-title` | Opening title + speakers |
| `slide-section` / `section-alt` | Full-bleed section breaks |
| `slide-list` | Bullets (optional `fragment`) |
| `slide-modes` | Two-column comparison |
| `slide-gallery` | 2×2 image grid |
| `slide-diagram` | Full-bleed diagram |
| `slide-split` | Text + side diagram |
| `slide-code` | Syntax-highlighted code (`Highlight` plugin) |
| `slide-closing` | Thanks / contact |

Override the Pages base locally when needed:

```bash
BASE_PATH=/my-talk/ npm run build
```

## Theming

Brand tokens live at the top of `src/style.css`:

```css
:root {
  --ink: #121820;
  --muted: #2c3544;
  --surface: #f2eee6;
  --accent: #0c6b52;
  --accent-soft: #c5e4d8;
  --on-accent: #f2eee6;
  --closing: #121820;
}
```

Content slides share one solid paper colour (`--surface`). Section and closing slides use solid accent or ink. Defaults lean dyslexia-friendly:

- [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) with open letter/word spacing
- Sentence-case labels; prefer **bold** over italic for emphasis
- Quiet motion (`transition: 'none'`; plain `fragment` without travel)
- Light syntax colours on paper (no dark Monokai block)
- Calmer 1–2 column layouts

Swap fonts via `@fontsource/atkinson-hyperlegible` in `src/main.js` and the `--r-*-font` / spacing variables.

## CI and publish

Shared quality gate lives in `.github/actions/build` (`npm ci`, audit, Vite build with repo-derived `BASE_PATH`, `dist/` smoke check).

- **CI** (`.github/workflows/ci.yml`) runs that action on pull requests.
- **CD** (`.github/workflows/cd.yml`) runs the same action on pushes to `main` (or `workflow_dispatch`), uploads `dist/`, and deploys to GitHub Pages.

Dependabot watches npm and GitHub Actions weekly.

## Scaffold

Vite + reveal.js 6 with Atkinson Hyperlegible, a solid paper surface + teal accent palette, quiet transitions, Highlight + Notes plugins, calm 1–2 column layouts, and project Pages base path derived from the repo / package name.
