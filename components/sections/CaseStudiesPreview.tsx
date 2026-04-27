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
    <section className="bg-black">
      <div className="max-w-content mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
          What Implenix has built for businesses like yours
        </h2>
        {/* LINK TO REAL CASE STUDY SLUGS WHEN PUBLISHED */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {FEATURED.map((cs) => (
            <CaseStudyCard key={cs.href} {...cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
