# Testimonials

> Static testimonial showcase wall with a masonry grid of client quotes, star ratings, photos, and names.

![Status: Functional](https://img.shields.io/badge/status-functional-brightgreen)
![HTML](https://img.shields.io/badge/HTML-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## Live Demo

[https://izzydoesizzy.github.io/testimonials/](https://izzydoesizzy.github.io/testimonials/)

## Overview

Testimonials is a lightweight, static website that displays a curated wall of client feedback in a masonry-style grid layout. Each testimonial card includes a quote, star rating (3-5 stars), author photo (via Unsplash), name, and job title. The page is fully self-contained with no build step or framework -- just HTML, CSS, and vanilla JavaScript. It is hosted on GitHub Pages.

## Features

- **Masonry Grid Layout** -- Testimonial cards arranged in a responsive, Pinterest-style masonry grid using CSS columns
- **Star Ratings** -- Each testimonial displays 1-5 stars rendered as inline SVGs (filled vs. empty)
- **Author Photos** -- Circular avatar images loaded from Unsplash with lazy loading
- **Varied Card Heights** -- Short, medium, and long testimonials create a natural visual rhythm
- **Accessibility** -- Screen-reader-only text for star ratings, semantic `<article>` elements, and `aria-live` region
- **Dynamic Rendering** -- Testimonial data stored as a JavaScript array and rendered to the DOM on page load
- **Hero Header** -- Clean header section with eyebrow text, headline, and lead paragraph
- **12 Testimonials** -- Pre-populated with diverse client stories across different industries
- **No Dependencies** -- Zero external libraries, frameworks, or build tools
- **Responsive Design** -- Adapts from single column on mobile to multi-column on desktop

## Tech Stack

| Category | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, CSS columns) |
| Logic | Vanilla JavaScript (ES6) |
| Images | Unsplash (hotlinked) |
| Hosting | GitHub Pages |

## Getting Started

### Clone and Open

```bash
git clone https://github.com/izzydoesizzy/testimonials.git
cd testimonials
open index.html
```

No install or build step required. Just open `index.html` in a browser.

### Customizing Testimonials

Edit the `testimonials` array in `script.js` to add, remove, or modify entries:

```javascript
{
  id: 'testimonial-1',
  testimonial: 'Your testimonial text here.',
  name: 'Client Name',
  job: 'Title, Company',
  image: {
    src: 'https://images.unsplash.com/photo-...',
    alt: 'Portrait of Client Name.',
  },
  rating: 5,
}
```

## Project Structure

```
testimonials/
├── index.html    # Page structure, hero header, grid container
├── styles.css    # Layout, masonry grid, card styles, star styling
└── script.js     # Testimonial data array and DOM rendering logic
```

## Tags

`landing-page` `portfolio`

## Created

February 2026

## Status

Functional (live on GitHub Pages)

## Author

[Izzy Piyale-Sheard](https://github.com/izzydoesizzy)
