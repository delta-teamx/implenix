import type { Metadata } from 'next';

export const SITE_URL = 'https://implenix.net';
export const SITE_NAME = 'Implenix';
export const SITE_DESCRIPTION =
  'Implenix builds and deploys AI voice agents that answer calls, qualify leads, and book appointments for local businesses. Never miss a call again.';

export const DEFAULT_SEO = {
  titleTemplate: '%s | Implenix',
  defaultTitle: 'Implenix — AI Receptionist for Local Businesses',
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website' as const,
    locale: 'en_US',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: {
    handle: '@implenix',
    cardType: 'summary_large_image' as const,
  },
  canonical: SITE_URL,
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
  /** OG type — 'article' for blog posts + case studies, 'website' for everything else (default). */
  ogType?: 'website' | 'article';
  /** Only used with ogType='article' — ISO date for article:published_time. */
  publishedTime?: string;
  /** Only used with ogType='article' — author string for article:author. */
  author?: string;
  /** Only used with ogType='article' — array of tag strings for article:tag. */
  tags?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/og-default.png',
  noindex = false,
  ogType = 'website',
  publishedTime,
  author,
  tags,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const openGraph: Metadata['openGraph'] =
    ogType === 'article'
      ? {
          title,
          description,
          url,
          siteName: SITE_NAME,
          type: 'article',
          locale: 'en_US',
          images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
          ...(publishedTime ? { publishedTime } : {}),
          ...(author ? { authors: [author] } : {}),
          ...(tags && tags.length > 0 ? { tags } : {}),
        }
      : {
          title,
          description,
          url,
          siteName: SITE_NAME,
          type: 'website',
          locale: 'en_US',
          images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        };
  return {
    // Pass title as absolute so the root layout's titleTemplate does not
    // double-apply " | Implenix" when page-level titles already include it.
    title: { absolute: title },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
