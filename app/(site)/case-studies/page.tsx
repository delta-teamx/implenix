import type { Metadata } from 'next';
import { allCaseStudies } from 'contentlayer/generated';
import { Badge } from '@/components/common/Badge';
import { buildMetadata } from '@/lib/seo';
import { CaseStudiesClient } from './CaseStudiesClient';

export const metadata: Metadata = buildMetadata({
  title: 'AI Receptionist Case Studies for Local Businesses | Implenix',
  description:
    'Verified Implenix deployments. Filter by industry to see what we have shipped for HVAC, dental, real estate, and other local-business clients.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  const studies = [...allCaseStudies]
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .map((s) => ({
      slug: s.slug,
      industry: s.industry,
      resultHeadline: s.resultHeadline,
      summary: s.summary,
    }));

  return (
    <>
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-3xl flex flex-col gap-5">
            <Badge label="Proof · Case studies" variant="purple" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
              Verified deployments from the Implenix portfolio.
            </h1>
            <p className="font-body text-white/75 text-lg max-w-2xl leading-relaxed">
              Filter by industry to see what we have shipped for businesses
              like yours. Every case study is paired with a real call
              recording.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <CaseStudiesClient studies={studies} />
      </section>
    </>
  );
}
