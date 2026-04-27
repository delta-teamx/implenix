import type { Metadata } from 'next';
import { allCaseStudies } from 'contentlayer/generated';
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
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-24">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ proof // case studies ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4">
            Case Studies
          </h1>
          <p className="mt-4 font-body text-white/75 max-w-2xl">
            Verified deployments from the Implenix portfolio. Filter by
            industry to see what we have shipped for businesses like yours.
          </p>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <CaseStudiesClient studies={studies} />
      </section>
    </>
  );
}
