# BlueLaunch — Digital Products Landing Page

A modern, conversion‑focused landing page for digital products. It ships with two polished themes (Dark and Light), responsive layout, accessible markup, and a professional blue accent.

## Overview

- Clean, semantic HTML with clear content hierarchy.
- Responsive CSS Grid layouts optimized for mobile → desktop.
- Reusable design tokens (CSS variables) for quick theming.
- Accessible navigation, skip link, and keyboard‑friendly controls.
- SEO metadata and Open Graph/Twitter tags ready to customize.

## Project Structure

```
assets/
  css/
    dark.css        # primary dark theme
    light.css       # light theme overrides
  img/
    hero-illustration.svg
  js/
    script.js       # nav toggle, smooth scroll, form check, year
index.html          # dark theme (main)
index-dark.html     # convenience file for dark (redirects)
index-white.html    # light theme page
```

## Getting Started

- Open `index.html` (Dark) or `index-white.html` (Light) directly in your browser.
- Optional dev server: use any static server (for example VS Code “Live Server”).

## Theming

- Primary color and tokens live in `:root` within `assets/css/dark.css` and are overridden in `assets/css/light.css`.
- Update `--primary` to tweak the blue accent across components.

## Customization

- Branding: edit the `.brand` block (name and logo glyph) in HTML.
- Hero art: replace `assets/img/hero-illustration.svg` with your own.
- Copy: adjust section headings, feature bullets, testimonials, and CTAs.

## SEO & Social

- Update `<title>`, `<meta name="description">`, `og:*`, and `twitter:*` tags.
- Replace social preview image paths with your hosted image.

## Accessibility

- Includes skip‑to‑content link, proper landmarks, and logical heading order.
- Mobile navigation button uses `aria-expanded` and keyboard activation.

## Notes

- `index.html` is the primary page (Dark). `index-white.html` provides the Light variant.
- A theme switcher can be added to toggle Dark/Light and persist choice via `localStorage` if needed.
