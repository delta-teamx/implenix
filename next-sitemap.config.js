/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://implenix.net',
  generateRobotsTxt: true,
  exclude: ['/lp/*', '/api/*', '/admin/*', '/preview/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/lp/', '/api/', '/admin/', '/preview/'],
      },
    ],
    additionalSitemaps: [],
  },
  // Priority signals what we want crawled most. Money pages (industry,
  // comparison, pricing, audit) get top priority. Educational and
  // long-tail content ranks lower.
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (
      path.startsWith('/ai-receptionist-for-') ||
      path.startsWith('/ai-receptionist-vs-')
    ) {
      // Programmatic SEO money pages — industry + comparison.
      priority = 0.9;
      changefreq = 'weekly';
    } else if (
      path === '/pricing' ||
      path === '/audit' ||
      path === '/try-it' ||
      path.startsWith('/solutions')
    ) {
      // Commercial-intent pillars.
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-studies')) {
      priority = 0.8;
    } else if (path.startsWith('/blog') || path.startsWith('/resources')) {
      priority = 0.6;
    } else if (path.startsWith('/docs')) {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
