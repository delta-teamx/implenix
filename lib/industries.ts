export type IndustryMeta = {
  slug: string;
  name: string;
  painPoint: string;
};

// Slugs match the SEO brief's URL pattern: /ai-receptionist-for-[slug].
// Slug values are the canonical search-intent terms ("dentists",
// "hvac-companies"), not generic nouns. Redirects from the older
// "-businesses" pattern live in next.config.js.
export const INDUSTRIES: IndustryMeta[] = [
  {
    slug: 'hvac-companies',
    name: 'HVAC',
    painPoint: 'Emergency calls at midnight, no one to answer.',
  },
  {
    slug: 'dentists',
    name: 'Dental',
    painPoint: 'Front desk overloaded, appointments slipping.',
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    painPoint: 'First agent to call back wins the listing.',
  },
  {
    slug: 'law-firms',
    name: 'Law Firms',
    painPoint: 'High-value cases lost to voicemail.',
  },
  {
    slug: 'plumbers',
    name: 'Plumbing',
    painPoint: 'Burst pipes, ringing phone, no answer.',
  },
  {
    slug: 'med-spas',
    name: 'Med Spa',
    painPoint: 'Booking calls outside business hours.',
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair',
    painPoint: 'Estimate requests left on hold.',
  },
  {
    slug: 'roofers',
    name: 'Roofing',
    painPoint: 'Storm-season inbound calls overwhelm the line.',
  },
  {
    slug: 'medical-practices',
    name: 'Medical Practices',
    painPoint: 'Front desk drowning, intake calls dying in voicemail.',
  },
  {
    slug: 'electricians',
    name: 'Electricians',
    painPoint: 'Outage calls at 9 PM, no one to dispatch.',
  },
  {
    slug: 'contractors',
    name: 'Contractors',
    painPoint: 'Six-figure bid calls hit voicemail mid-pour.',
  },
  {
    slug: 'salons',
    name: 'Salons',
    painPoint: 'Front desk on the phone instead of with clients.',
  },
  {
    slug: 'accountants',
    name: 'Accountants',
    painPoint: 'Tax season turns the phone into a denial-of-service.',
  },
  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    painPoint: 'Cold pitches drown out real RFPs in the inbound queue.',
  },
];

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);

export function getIndustryBySlug(slug: string): IndustryMeta | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function industryUrl(slug: string): string {
  return `/ai-receptionist-for-${slug}`;
}

// Map of legacy "-businesses" URL slugs → current canonical slugs.
// Drives 301 redirects in next.config.js.
export const LEGACY_BUSINESSES_REDIRECTS: Array<{ from: string; to: string }> = [
  { from: 'hvac', to: 'hvac-companies' },
  { from: 'dental', to: 'dentists' },
  { from: 'plumbing', to: 'plumbers' },
  { from: 'med-spa', to: 'med-spas' },
  { from: 'roofing', to: 'roofers' },
  { from: 'real-estate', to: 'real-estate' },
  { from: 'law-firms', to: 'law-firms' },
  { from: 'auto-repair', to: 'auto-repair' },
];
