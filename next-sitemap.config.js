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
      // Home page — top priority.
      priority = 1.0;
      changefreq = 'daily';
    } else if (path === '/ai-receptionist') {
      // Primary keyword pillar — second-highest priority.
      priority = 0.95;
      changefreq = 'weekly';
    } else if (
      path.startsWith('/ai-receptionist-for-') ||
      path.startsWith('/ai-receptionist-vs-') ||
      path.endsWith('-alternative')
    ) {
      // Programmatic SEO money pages — industry, comparison, and
      // competitor-alternative landings.
      priority = 0.9;
      changefreq = 'weekly';
    } else if (
      path === '/pricing' ||
      path === '/audit' ||
      path === '/try-it' ||
      path === '/ai-phone-answering-service' ||
      path.startsWith('/solutions')
    ) {
      // Commercial-intent pillars.
      priority = 0.85;
      changefreq = 'weekly';
    } else if (path.startsWith('/case-studies')) {
      priority = 0.8;
    } else if (
      path === '/what-is-an-ai-receptionist' ||
      path === '/how-does-an-ai-receptionist-work' ||
      path === '/benefits-of-ai-receptionist' ||
      path === '/ai-receptionist-cost-comparison' ||
      path === '/ai-call-answering-service' ||
      path === '/24-7-ai-receptionist' ||
      path === '/virtual-ai-receptionist'
    ) {
      // Information-stage cluster pages.
      priority = 0.75;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog/topics/')) {
      // Topical hub pages — Google 2026 topical-authority signal.
      // Higher priority than individual blog posts.
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path.startsWith('/blog') || path.startsWith('/resources')) {
      priority = 0.6;
    } else if (path.startsWith('/glossary')) {
      // Long-tail entity pages — lower priority but still indexable.
      priority = 0.5;
      changefreq = 'monthly';
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
