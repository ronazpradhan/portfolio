---
title: Why there's no 3D background
summary: A WebGL scene behind a list of projects costs battery, frames and attention, and tells a visitor nothing.
date: 2026-10-08
---

Animated 3D hero sections are the default look for developer portfolios right now. I left mine out on purpose.

**What it costs.** A full-screen WebGL canvas means a library like three.js (hundreds of KB before compression), shader compilation on load, and the GPU drawing every frame for as long as the tab is open. On a mid-range laptop that's fine. On a budget Android phone it means a warm device, a draining battery and dropped frames while you try to scroll.

**What it says.** Very little that's specific to me. It's the same effect on thousands of sites.

**What I'd rather show.** The work, and how it's built. Screenshots of things I built do the job a background effect would do, and the page still works with animations off, on a slow connection, or in a screenshot.

If a project of mine needs 3D, it gets 3D on that project's page, where the cost buys something.
