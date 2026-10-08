// Real entries only. Add a line when something actually changes.
export const log = [
  { date: '2026-10-08', text: 'Rebuilt this site as static Astro output. The homepage ships no JavaScript.' },
  { date: '2026-10-08', text: 'Dropped GSAP. The one entrance animation it would have driven is a few lines of CSS.' },
  { date: '2026-10-08', text: 'Page weight is now measured from the build output instead of written by hand.' },
];

// status: what is actually true today, not what is planned to be true.
export const experiments = [
  {
    q: 'How little infrastructure does a multiplayer game need?',
    a: 'One Node process, one dependency (ws), rooms held in memory. Enough for Ludo and Jutpatti on the same socket.',
    status: 'Done',
    href: '/work/ludo',
  },
  {
    q: 'What changes when a traditional Nepali card game goes digital?',
    a: 'House rules become a config file, the shuffle has to be provably fair, and hidden hands force the server to be the referee.',
    status: 'In progress',
    href: '/work/jutpatti',
  },
  {
    q: 'How far do classical models get on raw pixels?',
    a: 'With PCA to 95% variance, Random Forest topped out at 43.74% on CIFAR-10. Useful as a floor, not a solution.',
    status: 'Done',
    href: '/work/cifar-10',
  },
  {
    q: 'Can a phone browser run a small image classifier without hurting the page?',
    a: 'Not tried yet. Question parked here so I measure it instead of guessing.',
    status: 'Open',
  },
];

export const otherWork = [
  {
    title: 'Money Tracker',
    summary: 'Offline-first Android app for logging income and expenses. Data stays on the device.',
    stack: ['React Native', 'Expo', 'SQLite'],
    href: 'https://github.com/ronazpradhan/money-tracker-web',
  },
];
