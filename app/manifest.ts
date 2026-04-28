import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Implenix',
    short_name: 'Implenix',
    description:
      'AI receptionist and automated calling systems for local businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070538',
    theme_color: '#070538',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  };
}
