---
title: Interactive, without a framework
summary: The die, the card hand and the Jutpatti demo on the homepage are a few dozen lines of plain TypeScript. Everything else is HTML.
date: 2026-10-08
---

My earlier portfolios were React apps with GSAP. This one is built with [Astro](https://astro.build), and the interesting parts are still interactive. They just don't need a framework.

## What each piece actually is

- **The card hand** is pure CSS. The fan is a `rotate()` per card, and hovering the hand resets the rotation and spreads the margins. On a phone it becomes a scroll-snap row instead, because hovering doesn't exist there.
- **The die** is six `div`s in a CSS 3D cube. Rolling picks a number, sets one `transform`, and swaps the text in the fact box. Every face is something true about my work.
- **The "where does the deck live" demo** flips a single `data-mode` attribute. CSS does the rest: card faces turn over, and the JSON panel swaps to show what the server would send.
- **Scroll reveals** are one `IntersectionObserver` for the whole page. If JavaScript doesn't run, nothing is hidden.

## Why not React here

Nothing on these pages shares state between components or re-renders from data. React would add a runtime to do what three event listeners already do. If I add a live model demo later, that one component can be an island with its own framework, loaded only on its page.

## What I kept on purpose

`prefers-reduced-motion` turns off the reveals and the die's spin; the die still works, it just changes face instantly. Every section reads fine with animation off.
