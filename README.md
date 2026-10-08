# ronazpradhan.com.np

Personal site. Static HTML built with Astro. No client-side JavaScript, no trackers.

```
npm install
npm run dev       # local dev server
npm run build     # build → measure page weight → build again (see scripts/measure.mjs)
```

## Where things are

```
src/site.ts              name, URL, GitHub, email (empty = hidden)
src/data.ts              engineering log, experiments, non-case-study projects
src/content/work/*.md    case studies (Problem → Constraints → Decisions → … → What I'd change)
src/content/notes/*.md   build notes
src/styles/global.css    the whole design system, one file
src/layouts/Base.astro   <head>, SEO, fonts, masthead, footer
src/metrics.json         written by scripts/measure.mjs, never edited by hand
```

Rules: no invented projects, dates or numbers. Log entries and metrics only for things that happened.

Deploy: any static host (Vercel, Netlify, Cloudflare Pages). Build command `npm run build`, output `dist`.
Pages are emitted as `/work/ludo.html`; hosts serve them at `/work/ludo`.
