import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CaseStudyCard } from '@/components/common/CaseStudyCard';

const FEATURED = [
  {
    industry: 'Law Firm',
    resultHeadline: '$47,000 in new client revenue captured in 90 days',
    summary:
      'Smith & Associates routed every after-hours intake through Implenix. Six-figure pipeline that used to die in voicemail closed inside 90 days.',
    href: '/case-studies/placeholder-real-estate',
  },
  {
    industry: 'HVAC',
    resultHeadline: '+312% in booked emergency jobs in 30 days',
    summary:
      'A 22-tech HVAC operator deployed Implenix as a 24/7 dispatcher. Inbound capture rate went from 41% to 96% in the first month.',
    href: '/case-studies/placeholder-hvac',
  },
  {
    industry: 'Dental',
    resultHeadline: '$22 / week reclaimed × 14 staff · $300K labor saved',
    summary:
      'A 4-location dental group routed routine reschedules and confirmations through Implenix and put their front desk back on patient care.',
    href: '/case-studies/placeholder-dental',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="bg-black border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case studies"
            title="Real businesses. Real revenue captured."
            badgeVariant="purple"
          />
          <Link
            href="/case-studies"
            data-cta-location="case-studies-preview"
            className="inline-flex items-center gap-2 text-brand-cyan font-medium text-sm hover:underline"
          >
            See all case studies <ArrowRight size={14} />
          </Link>
        </div>
        {/* LINK TO REAL CASE STUDY SLUGS WHEN PUBLISHED */}
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {FEATURED.map((cs) => (
            <CaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
