---
title: Interactive, without a framework
summary: The project marquee, scroll reveals and the Jutpatti demo are CSS plus a few lines of plain TypeScript. Everything else is HTML.
date: 2026-10-08
---

My earlier portfolios were React apps with GSAP. This one is built with [Astro](https://astro.build), and the interesting parts are still interactive. They just don't need a framework.

## What each piece actually is

- **The project marquee** is pure CSS: the list of cards is rendered twice and slid left by exactly half its width, so the loop is seamless. Hovering pauses it. The second copy is hidden from screen readers and keyboard focus, and with reduced motion on it becomes a normal scrollable row.
- **The "where does the deck live" demo** flips a single `data-mode` attribute. CSS does the rest: card faces turn over, and the JSON panel swaps to show what the server would send.
- **Scroll reveals** are one `IntersectionObserver` for the whole page. If JavaScript doesn't run, nothing is hidden.

## Why not React here

Nothing on these pages shares state between components or re-renders from data. React would add a runtime to do what two event listeners already do. If I add a live model demo later, that one component can be an island with its own framework, loaded only on its page.

## What I kept on purpose

`prefers-reduced-motion` turns off the reveals and stops the marquee. Every section reads fine with animation off.
