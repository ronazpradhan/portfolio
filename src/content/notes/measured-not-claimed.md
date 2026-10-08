---
title: Numbers on this site are measured, not typed
summary: The page-weight figures on the homepage come from a script that reads the build output. If a number can't be measured yet, it says so.
date: 2026-10-08
---

It's easy to write "fast" on a portfolio. It's also easy to paste a Lighthouse score from a good run and never update it.

So the homepage's numbers come from `scripts/measure.mjs`:

1. Astro builds the site.
2. The script reads `dist/index.html`, finds every asset it references, and adds up the gzipped HTML and CSS, the JavaScript, and the screenshots.
3. It writes the results to `src/metrics.json`.
4. Astro builds again, and the homepage renders those numbers.

Building twice sounds wasteful, but the whole site builds in a couple of seconds, and the alternative is a page that reports last week's size.

There's no Lighthouse score on the site yet, because I haven't run it on a real device. A score from my laptop's DevTools, with a fast CPU and Wi-Fi, isn't the number I care about. When I've tested on a low-end Android phone on mobile data, that result goes up, along with the device and network it was measured on.
