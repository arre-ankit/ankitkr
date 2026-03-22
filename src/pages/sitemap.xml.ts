import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../config';
import type { APIContext } from 'astro';

export async function GET(_context: APIContext) {
  const writing = await getCollection('writing', ({ data }) => data.draft !== true);

  const staticRoutes = ['', '/writing', '/projects'];

  const writingRoutes = writing.map((post) => `/writing/${post.slug}`);

  const allRoutes = [...staticRoutes, ...writingRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
  .map(
    (route) => `  <url>
    <loc>${SITE_CONFIG.url}${route}</loc>
    <changefreq>${route === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${route === '' ? '1.0' : route.startsWith('/writing/') ? '0.8' : '0.6'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
