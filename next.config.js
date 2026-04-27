const { withContentlayer } = require('next-contentlayer2');

const INDUSTRY_SLUGS = [
  'hvac',
  'dental',
  'real-estate',
  'law-firms',
  'plumbing',
  'med-spa',
  'auto-repair',
  'roofing',
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
    return INDUSTRY_SLUGS.map((slug) => ({
      source: `/industries/${slug}`,
      destination: `/ai-receptionist-for-${slug}-businesses`,
      permanent: true,
    }));
  },
};

module.exports = withContentlayer(nextConfig);
