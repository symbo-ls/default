export const generateSitemap = function generateSitemap (baseUrl, routes) {
  const urls = Object.entries(routes).map(([path, config]) => {
    const metadata = config.metadata || {};
    const canonical = metadata.canonical || `${baseUrl}${path === '/' ? '' : path}`;

    return `
  <url>
    <loc>${canonical}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`;
}