import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import { CaseStudyCard } from '@/components/common/CaseStudyCard';

const FEATURED = [
  {
    industry: 'HVAC',
    resultHeadline: '+312% in booked emergency jobs after deploying Implenix',
    summary:
      'A 22-tech HVAC operator deployed Implenix as a 24/7 dispatcher. Inbound capture rate went from 41% to 96% in 30 days.',
    href: '/case-studies/placeholder-hvac',
  },
  {
    industry: 'Dental',
    resultHeadline: 'Front desk reclaimed 22 hours per week per team member',
    summary:
      'A 4-location dental group replaced repetitive phone work with the Implenix agent and routed only qualified callers to staff.',
    href: '/case-studies/placeholder-dental',
  },
  {
    industry: 'Real Estate',
    resultHeadline: '<60s response time on every inbound listing inquiry',
    summary:
      'A boutique brokerage hit the first-call-back window on 100% of new leads. Listing-to-contact conversion jumped 2.4x.',
    href: '/case-studies/placeholder-real-estate',
  },
];

export function CaseStudiesPreview() {
  return (
    <section className="bg-black border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Case studies"
            title="What Implenix has built for businesses like yours"
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
