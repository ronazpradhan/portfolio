---
title: Jutpatti
summary: The Nepali card game, adapted for multiplayer on the web, with a server that deals fairly and never shows anyone your hand.
kind: Web game
status: In progress
role: Solo — rules engine, server, table UI
stack: [Node.js, WebSocket (ws), vanilla JS, node:test]
repo: https://github.com/ronazpradhan/ludo3d
order: 2
---

## Problem

Jutpatti is a card game people in Nepal play at home and during festivals, and there isn't a good place to play it online. Copying [Ludo](/work/ludo)'s approach wasn't an option: a card game has hidden information, and the moment a browser holds every player's cards, anyone with dev tools can read them.

## Constraints

- **Hidden hands.** No client may ever receive another player's cards, or the next card in the stock.
- **House rules vary.** Hand sizes, joker rules and draw sources differ between families.
- **Fairness has to be checkable**, not just claimed.
- It shares a server and a WebSocket connection with Ludo.

## Decisions

**Server-authoritative.** The deck, every hand, the turn order, legal moves and the winner live only on the server. Each browser receives its own cards and only the *count* of everyone else's. The client sends intents ("draw from stock", "discard this card"); the server decides whether they're legal.

**A pure engine.** `engine.js` exposes `createGame`, `getValidMoves`, `isValidMove`, `applyMove`, `nextTurn` and `viewFor`. No sockets, no timers, no I/O. The rules are testable without a server, and `viewFor(player)` is the single place that decides what a player is allowed to see.

**Rules as data.** House rules live in `rules.js`, so another family's variant is a config change, not a code change.

**A cryptographic shuffle.** Fisher–Yates using `crypto.randomInt`, with no seeds. The first dealer is random, then the deal rotates.

## Implementation

- `cards.js`: 52-card deck and the shuffle.
- `engine.js`: the rules, as pure functions.
- `rooms.js`: lobby, ready/start/rematch, reconnect, anti-cheat checks and an event log.
- Messages use a `jp:` prefix on the same WebSocket connection Ludo uses.
- Event logs are JSON lines that never contain a card drawn from the stock, so logs can't leak the deck.
- A player disconnected for 2 minutes during a game is removed, and their cards are shuffled back into the stock.

## Trade-offs

- Every action is a round trip to the server, so play is a little less instant than Ludo on a bad connection. That's the price of not trusting the client.
- Rooms are still in memory; a restart ends games.
- **Not built:** spectators, ranked play, chat moderation.

## Results

The test suite covers the deck, the engine, anti-cheat checks, end-to-end server behaviour, and a **statistical fairness test** of the shuffle. "The deal is fair" is something the tests check, not something I promise.

## What I'd change

Persist rooms (even to a single file) so a deploy doesn't end everyone's game, and play-test with people who grew up with different house rules before settling the defaults.
