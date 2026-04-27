export type IndustryMeta = {
  slug: string;
  name: string;
  painPoint: string;
};

export const INDUSTRIES: IndustryMeta[] = [
  {
    slug: 'hvac',
    name: 'HVAC',
    painPoint: 'Emergency calls at midnight, no one to answer.',
  },
  {
    slug: 'dental',
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
    slug: 'plumbing',
    name: 'Plumbing',
    painPoint: 'Burst pipes, ringing phone, no answer.',
  },
  {
    slug: 'med-spa',
    name: 'Med Spa',
    painPoint: 'Booking calls outside business hours.',
  },
  {
    slug: 'auto-repair',
    name: 'Auto Repair',
    painPoint: 'Estimate requests left on hold.',
  },
  {
    slug: 'roofing',
    name: 'Roofing',
    painPoint: 'Storm-season inbound calls overwhelm the line.',
  },
];

export const INDUSTRY_SLUGS = INDUSTRIES.map((i) => i.slug);

export function getIndustryBySlug(slug: string): IndustryMeta | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function industryUrl(slug: string): string {
  return `/ai-receptionist-for-${slug}-businesses`;
}
