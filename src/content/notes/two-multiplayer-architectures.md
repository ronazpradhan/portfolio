---
title: One server, two trust models
summary: Ludo trusts the browser. Jutpatti doesn't. Both run on the same small Node server, and the reason they differ is hidden information.
date: 2026-10-08
---

My Ludo and Jutpatti games share a server, a WebSocket connection and a lobby. They are built on opposite assumptions.

## Ludo: the server is a relay

In Ludo, every piece is on the board where everyone can see it. Each browser runs the full game, and the server just forwards moves between players in a room. That made the first playable version fast to build and kept the server tiny.

The cost: a modified client could fake a dice roll. Between friends, I accepted that for now.

## Jutpatti: the server is the referee

A card game is different. If the browser holds the deck, anyone who opens dev tools can see every hand. So in Jutpatti:

- the server owns the deck, the hands, the turn order and the rules;
- each browser gets its own cards and only the *number* of cards everyone else holds;
- clients send intents, and the server checks every one.

The rules engine is pure functions, and a single `viewFor(player)` function decides what each player may see. That one function is the boundary that keeps hands private, so it's the first thing I'd test, and it is.

## The general rule I took from it

Where state is public, trusting the client is a shortcut you can take knowingly. Where state is hidden, the server has to own it. The next version of Ludo moves dice rolls to the server too, because "fair" was the point of building it.
