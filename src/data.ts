// Real entries only. Add a line when something actually changes.
export const log = [
  { date: '2026-10-08', text: 'Redesigned again after the first version looked like every other generated portfolio. Swapped decoration for screenshots of the games and real code.' },
  { date: '2026-10-08', text: 'Removed both web fonts (about 71 KB). Text now uses the serif already installed on your device.' },
  { date: '2026-10-08', text: 'Page weight is measured from the build output instead of written by hand.' },
  { date: '2026-10-08', text: 'Rebuilt this site as static Astro output with no client-side JavaScript. Dropped GSAP.' },
];

export const questions = [
  { q: 'Can a phone browser run a small image classifier without making the page janky?', a: 'Not tried yet.' },
  { q: 'What is the least server a fair multiplayer game needs?', a: 'So far: one Node process, one dependency, rooms in memory.', href: '/notes/two-multiplayer-architectures' },
  { q: 'How much of a weak model is a weak representation?', a: 'Next step for the CIFAR-10 work: better features before better models.', href: '/work/cifar-10' },
];
