# ronazpradhan.com.np

Personal site, built with Astro. Interactive bits are small vanilla TypeScript, no client framework.

```
npm install
npm run dev       # local dev server
npm run build     # static output in dist/
```

## Where things are

```
src/site.ts              name, URL, GitHub, email (empty = hidden)
src/assets/*.png         real screenshots of the games (Astro converts to AVIF/WebP)
src/data.ts              changelog and open questions
src/components/          Die, Hand (project cards), TrustDemo (Jutpatti architecture toggle)
src/content/work/*.md    case studies (Problem → Constraints → Decisions → … → What I'd change)
src/content/notes/*.md   build notes
src/styles/global.css    the whole design system, one file
src/layouts/Base.astro   <head>, SEO, fonts, masthead, footer
```

Rules: no invented projects, dates or numbers. Log entries and metrics only for things that happened.

Deploy: any static host (Vercel, Netlify, Cloudflare Pages). Build command `npm run build`, output `dist`.
Pages are emitted as `/work/ludo.html`; hosts serve them at `/work/ludo`.
