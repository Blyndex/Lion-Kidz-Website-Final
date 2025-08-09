
import { useEffect } from 'react';

const SitemapGenerator = () => {
  useEffect(() => {
    const generateSitemap = () => {
      const baseUrl = 'https://lionkidzphoto.mu';
      const pages = [
        { url: '/', priority: '1.0', changefreq: 'weekly' },
        { url: '/portfolio', priority: '0.9', changefreq: 'weekly' },
        { url: '/services', priority: '0.9', changefreq: 'monthly' },
        { url: '/about', priority: '0.8', changefreq: 'monthly' },
        { url: '/contact', priority: '0.8', changefreq: 'monthly' },
        { url: '/testimonials', priority: '0.7', changefreq: 'monthly' }
      ];

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

      // Sitemap generated successfully
    };

    generateSitemap();
  }, []);

  return null;
};

export default SitemapGenerator;
