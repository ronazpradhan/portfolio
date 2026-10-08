---
title: Why this site ships no JavaScript
summary: A portfolio is a document. Documents don't need a runtime to be read.
date: 2026-10-08
---

My earlier portfolios were React apps with GSAP. They worked, but every visitor downloaded a framework to read a few paragraphs of text and a list of links.

This version is built with [Astro](https://astro.build). Pages are rendered to HTML at build time, and nothing is hydrated in the browser. The result:

- The first byte of HTML already contains the content. No blank screen while a bundle parses.
- Nothing to execute on a slow phone's main thread, so nothing to block taps.
- Fewer things to break. A page with no scripts can't throw.

## What replaced the JavaScript

- **Animation:** none, apart from the page cross-fade below. GSAP is a good library; a portfolio of text and screenshots doesn't need it.
- **Page transitions:** the CSS `@view-transition` rule. Browsers that support it cross-fade between pages; browsers that don't just navigate. No router.
- **Fonts:** none. The first version loaded two variable fonts (about 71 KB). The serif already on your device is good enough, and costs nothing.

## When I would add JavaScript

When something on the page is actually interactive, such as a live demo of a model or a playable game board, I'd add it as an island: a script for that one component, loaded only on the page that needs it. Astro supports this directly, which is the main reason I picked it over a plain static site generator.

Until then, the right amount is zero.
