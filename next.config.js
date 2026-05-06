const { withContentlayer } = require('next-contentlayer2');

// Slug-to-canonical mapping. Old "-businesses" URLs and the original
// /industries/ path both 301 to the SEO-aligned /ai-receptionist-for-[slug]
// pattern shipped in Phase 2 of the SEO plan.
const SLUG_REDIRECTS = [
  { from: 'hvac', to: 'hvac-companies' },
  { from: 'dental', to: 'dentists' },
  { from: 'plumbing', to: 'plumbers' },
  { from: 'med-spa', to: 'med-spas' },
  { from: 'roofing', to: 'roofers' },
  { from: 'real-estate', to: 'real-estate' },
  { from: 'law-firms', to: 'law-firms' },
  { from: 'auto-repair', to: 'auto-repair' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      // Add CDN/image hosts here when assets are ready.
    ],
  },
  async redirects() {
    const fromBusinesses = SLUG_REDIRECTS.map(({ from, to }) => ({
      source: `/ai-receptionist-for-${from}-businesses`,
      destination: `/ai-receptionist-for-${to}`,
      permanent: true,
    }));
    const fromIndustries = SLUG_REDIRECTS.map(({ from, to }) => ({
      source: `/industries/${from}`,
      destination: `/ai-receptionist-for-${to}`,
      permanent: true,
    }));
    return [...fromBusinesses, ...fromIndustries];
  },
};

module.exports = withContentlayer(nextConfig);
