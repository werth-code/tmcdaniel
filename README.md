# The Thomas F. McDaniel Archive

A clean, fast, SEO-optimized static rebuild of the scholarly website of
**Thomas F. McDaniel, Ph.D.** — Professor Emeritus of Old Testament Studies and
Hebrew at Palmer Theological Seminary (the Seminary of Eastern University).

Live: **https://werth-code.github.io/tmcdaniel/**
Original (frameset) site: <https://tmcdaniel.palmerseminary.edu>

## What's here

- The five free volumes (Song of Deborah; Clarifying Baffling Biblical Passages
  I & II; Aramaic Names & Hebrew Matthew; Miscellaneous Biblical Studies),
  presented full and chapter-by-chapter.
- Writings & reviews (1951–2012), seven sermons, and the hermeneutical essay
  *A Key for Interpreting the Bible*.
- A curated index of Semitic lexicons and collections (these large reference
  works remain linked to the original Palmer server).
- All of Dr. McDaniel's own PDFs (154 files, ~89 MB) are **rehosted** here in
  `/pdf/` so the corpus survives independently of the original site.

## Build

The site is generated from a small data model — no build dependencies beyond Node.

```sh
node build.js          # regenerates all HTML, sitemap.xml, robots.txt
```

- `src/data.js` — all content (books, chapters, writings, sermons, CV, essay)
- `build.js` — the generator (page shell, SEO head, JSON-LD, navigation)
- `assets/css/site.css` — the design system ("scholar's manuscript")
- `pdf/` — rehosted PDFs
- `harvest/` — raw captured source from the original site (git-ignored)

## Design

A refined scholarly aesthetic: aged-parchment ground, Cinzel inscriptional
capitals, EB Garamond for reading, oxblood "rubrication" and antique-gold
hairlines. Responsive, accessible (WCAG-AA contrast, reduced-motion aware),
and printable.

## SEO

Per-page titles & meta descriptions, canonical URLs, Open Graph / Twitter
cards, JSON-LD (`Person`, `Book`, `Article`, `BreadcrumbList`), `sitemap.xml`,
`robots.txt`, semantic HTML, and clean directory-style URLs.
