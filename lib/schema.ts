import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from './seo';

export type FAQItem = { question: string; answer: string };

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'AI receptionist and automated calling systems for local businesses',
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/blog?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function faqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function localBusinessSchema(industry: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Implenix — AI Receptionist for ${industry}`,
    url: `${SITE_URL}${url}`,
    description: `AI receptionist solution built for ${industry} businesses.`,
    areaServed: 'United States',
    serviceType: 'AI Receptionist',
  };
}

export function articleSchema({
  title,
  description,
  url,
  datePublished,
  author = SITE_NAME,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    author: { '@type': 'Organization', name: author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function blogPostingSchema({
  title,
  description,
  url,
  datePublished,
  author,
  authorRole,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  author: string;
  authorRole?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    datePublished,
    author: {
      '@type': 'Person',
      name: author,
      ...(authorRole ? { jobTitle: authorRole } : {}),
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function techArticleSchema({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export type BreadcrumbCrumb = { label: string; href: string };

// BreadcrumbList JSON-LD. The href on each crumb is converted to an
// absolute URL. The final crumb (current page) gets its position but no
// item per Google guidance — keep last href as the canonical url.
export function breadcrumbListSchema(crumbs: BreadcrumbCrumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}

// SoftwareApplication schema for the Implenix product. Used on the
// home page and on the /ai-receptionist pillar so search engines pick
// up the SaaS app as a queryable entity. Aggregate rating is optional
// and only emitted when ratingValue is provided.
export function softwareApplicationSchema(opts?: {
  ratingValue?: number;
  ratingCount?: number;
}) {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: SITE_DESCRIPTION,
    offers: {
      '@type': 'Offer',
      price: '297',
      priceCurrency: 'USD',
      url: `${SITE_URL}/pricing`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
  if (opts?.ratingValue && opts.ratingCount) {
    base.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: opts.ratingValue,
      ratingCount: opts.ratingCount,
      bestRating: 5,
      worstRating: 1,
    };
  }
  return base;
}

// Service schema describing what Implenix does, parameterized by name
// and serviceType so it can be reused across industry / use-case pages.
export function serviceSchema({
  name,
  description,
  serviceType,
  url,
  areaServed = 'United States',
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType,
    url: `${SITE_URL}${url}`,
    areaServed,
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function jsonLdScript(schema: unknown | unknown[]) {
  const value = Array.isArray(schema) ? schema : [schema];
  return value.map((s) => JSON.stringify(s));
}
