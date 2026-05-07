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
};

export function buildMetadata({
  title,
  description,
  path,
  ogImage = '/og-default.png',
  noindex = false,
}: BuildMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;
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
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
      locale: 'en_US',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
