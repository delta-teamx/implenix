/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://implenix.net',
  generateRobotsTxt: true,
  exclude: ['/lp/*', '/api/*', '/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/lp/', '/api/', '/admin/'],
      },
    ],
    additionalSitemaps: [],
  },
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/ai-receptionist-for-')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-studies') || path.startsWith('/solutions')) {
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
