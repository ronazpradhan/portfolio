---
title: Money Tracker
summary: An offline-first Android app for logging income and expenses. No account, no cloud, and the fastest way I could make to log a transaction.
kind: Android app
status: In use · APK release
role: Solo — design, app, landing page
stack: [React Native, Expo, Expo Router, SQLite, AsyncStorage, Reanimated]
live: https://money-tracker-android-web.vercel.app/
order: 4
shots:
  - { src: ../../assets/money/dark.jpg, alt: "Home screen in the dark theme: monthly spending of NPR 2,603 out of a NPR 10,000 budget, 74% remaining, top categories and recent transactions" }
  - { src: ../../assets/money/light.jpg, alt: "Home screen in the light theme: this month's income and expenses, budget remaining bar, top categories and recent entries" }
  - { src: ../../assets/money/lock.jpg, alt: "Security lock screen with a four-digit passcode pad and an Unlock with Biometrics button" }
  - { src: ../../assets/money/crimson.jpg, alt: "Home screen in the Crimson theme" }
  - { src: ../../assets/money/pink.jpg, alt: "Home screen in the Pink Ribbon theme" }
---

## Problem

Most finance apps I tried felt heavy: forced sign-up, bank sync, ads, and dashboards with too many screens. I wanted something I'd actually use every day, which meant one thing above all: logging an expense has to take seconds.

## Constraints

- **Privacy.** It's personal financial data. I didn't want it on a server, including mine.
- **No internet assumed.** It has to work with no signal at all.
- **No Play Store yet.** The app ships as an APK from its own website, so updates can't rely on the store.
- I'm building it alone, alongside university.

## Decisions

**Offline-first, on-device storage.** Transactions live in SQLite on the phone; small settings live in AsyncStorage. There's no account and no sync server, so there's nothing to log into and nothing to breach.

**Backups are manual, on purpose.** Instead of cloud sync, you export and import your whole history as CSV. That keeps the privacy promise and gives you a file you can open in Excel or Google Sheets.

**A custom numpad.** The most frequent action is typing an amount, so I built a numpad with haptic feedback instead of using the system keyboard.

**Updates without a store.** The app occasionally checks a small `version.json` on the project website and, if there's a newer build, prompts you to download it.

**Analytics that can't see money.** There's limited anonymous analytics (PostHog) to see which features get used. No transaction data is ever sent, and it can be switched off in Settings.

## Implementation

- Screens and navigation with Expo Router: Home, History, Analytics, Profile, and a central add button.
- Home shows this month's spending against a monthly budget limit, top categories, and recent entries.
- Charts for spending patterns and category breakdowns.
- An app lock with a passcode and biometric unlock.
- Several themes, including dark, light, Crimson and Pink Ribbon.
- Animations with Reanimated.
- A public landing page (React + Vite on Vercel) where the APK is downloaded.

## Trade-offs

- **Uninstall means data loss** unless you exported a backup. That's the cost of never uploading anything; the app and the FAQ both say so plainly.
- **Play Protect warning.** Installing an APK from outside the Play Store shows a standard Android warning. A store release would remove it.
- **One device only.** No multi-device sync by design, for now.
- The app's source is in a private repository while I keep working on it.

## Results

I use it myself for day-to-day spending, and it's downloadable from its [public page](https://money-tracker-android-web.vercel.app/). It's where I learned how a real app gets planned, built, tested and improved over time, not just finished for a deadline.

## What I'd change

Next on the list: optional cloud backup and sync, monthly budget goals, PDF export, more currencies, spending reminders, and a Play Store release.
