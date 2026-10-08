import { getCollection } from 'astro:content';
import { site } from '../site';

export async function GET() {
  const work = await getCollection('work');
  const notes = await getCollection('notes');
  const paths = ['/', ...work.map((w) => `/work/${w.id}`), ...notes.map((n) => `/notes/${n.id}`)];
  const urls = paths.map((p) => `<url><loc>${new URL(p, site.url).href}</loc></url>`).join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
