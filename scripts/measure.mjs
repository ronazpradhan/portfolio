// Measures what the homepage actually costs, from the build output, and writes src/metrics.json.
// `npm run build` builds, measures, then builds again so the page can show its own numbers.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join } from 'node:path';

const dist = 'dist';
const gz = (buf) => gzipSync(buf, { level: 9 }).length;
const kb = (n) => `${(n / 1024).toFixed(1)} KB`;

const html = readFileSync(join(dist, 'index.html'));
const htmlText = html.toString();

// Everything the homepage references from /_astro/ (CSS is inlined, so this is fonts and any JS).
const assets = [...new Set([...htmlText.matchAll(/\/_astro\/[^"')\s]+/g)].map((m) => m[0]))];
const read = (p) => readFileSync(join(dist, p));
const js = assets.filter((a) => a.endsWith('.js')).reduce((s, a) => s + gz(read(a)), 0);
const css = assets.filter((a) => a.endsWith('.css')).reduce((s, a) => s + gz(read(a)), 0);
const fonts = assets.filter((a) => a.endsWith('.woff2')).reduce((s, a) => s + read(a).length, 0); // already compressed
const inlineScripts = (htmlText.match(/<script(?![^>]*application\/ld\+json)[^>]*>/g) || []).length;

const out = {
  measured: new Date().toISOString().slice(0, 10),
  js: js === 0 && inlineScripts === 0 ? '0 KB' : kb(js),
  html: kb(gz(html) + css),
  fonts: kb(fonts),
  total: kb(gz(html) + css + js + fonts),
};
writeFileSync('src/metrics.json', JSON.stringify(out, null, 2) + '\n');
console.log('measured', out, existsSync(join(dist, '_astro')) ? readdirSync(join(dist, '_astro')) : []);
