// Measures what the homepage costs, from the build output, and writes src/metrics.json.
// `npm run build` builds, measures, then builds again so the page can report its own numbers.
import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const gz = (buf) => gzipSync(buf, { level: 9 }).length;
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;
const html = readFileSync('dist/index.html');
const text = html.toString();
const assets = [...new Set([...text.matchAll(/\/_astro\/[^"'),\s]+/g)].map((m) => m[0]))];
const size = (a) => statSync(join('dist', a)).size;

const js = assets.filter((a) => a.endsWith('.js')).reduce((s, a) => s + gz(readFileSync(join('dist', a))), 0);
const css = assets.filter((a) => a.endsWith('.css')).reduce((s, a) => s + gz(readFileSync(join('dist', a))), 0);
const scripts = (text.match(/<script(?![^>]*application\/ld\+json)[^>]*>/g) || []).length;
// Upper bound for images: the largest AVIF variant of each screenshot (browsers pick a smaller one on phones).
const largest = {};
for (const a of assets.filter((a) => a.endsWith('.avif'))) {
  const key = a.split('/').pop().split('.')[0];
  largest[key] = Math.max(largest[key] ?? 0, size(a));
}

const out = {
  measured: new Date().toISOString().slice(0, 10),
  page: kb(gz(html) + css),
  js: js === 0 && scripts === 0 ? '0 KB' : kb(js),
  images: kb(Object.values(largest).reduce((s, n) => s + n, 0)),
};
writeFileSync('src/metrics.json', JSON.stringify(out, null, 2) + '\n');
console.log('measured', out);
