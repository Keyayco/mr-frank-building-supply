# Mr Frank Building Supply

A fast, mobile-first, single-page website for **Mr Frank Building Supply**, a local building-supply business in Roodekop, Germiston, South Africa.

Built as a **fully vanilla static site** — HTML5, CSS3 and vanilla JavaScript only. No frameworks, no build step, no backend. It deploys to GitHub Pages as-is.

## Features

- Premium industrial design system driven by CSS custom properties
- Sticky, compacting header with a vanilla-JS hamburger menu
- Scroll-reveal animations via `IntersectionObserver` (respects `prefers-reduced-motion`)
- Supply-category grid, contractor/about, location and high-conversion contact sections
- Fixed mobile contact bar (Call / WhatsApp)
- `tel:` and `https://wa.me/` links for instant contact
- Google Maps directions link (no paid map / API required)
- Local-business SEO: title, meta description, Open Graph, and valid `LocalBusiness` structured data (JSON-LD) using only verified business details
- Accessible: semantic HTML, skip link, keyboard support, visible focus states, 44px+ touch targets

## Business details

- **Address:** D R103, Roodekop, Germiston, 1401, South Africa
- **Phone:** 074 400 9699

## File structure

```
/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── images/     # hero.png, contractor.png
    └── icons/      # favicon.svg
```

## Run locally

Just open `index.html` in a browser. No install or build step required.

Optionally serve it with any static server, e.g.:

```bash
python3 -m http.server
```

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to *Deploy from a branch*.
4. Choose the `main` branch and the `/ (root)` folder, then **Save**.
5. Your site goes live at `https://<username>.github.io/<repo>/`.

No workflow, build command or environment variables are needed.

## Customising

Colours, spacing and fonts are defined as CSS custom properties in the `:root` block of `style.css`. Update those values to re-theme the whole site.
