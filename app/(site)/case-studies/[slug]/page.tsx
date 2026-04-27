import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allCaseStudies } from 'contentlayer/generated';
import { StatCard } from '@/components/common/StatCard';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { LeadForm } from '@/components/common/LeadForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { articleSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return allCaseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const doc = allCaseStudies.find((c) => c.slug === params.slug);
  if (!doc) return {};
  return buildMetadata({
    title: doc.metaTitle,
    description: doc.metaDescription,
    path: `/case-studies/${doc.slug}`,
  });
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const doc = allCaseStudies.find((c) => c.slug === params.slug);
  if (!doc) notFound();

  const MDX = useMDXComponent(doc.body.code);
  const overview = doc.clientOverview as {
    industry: string;
    size: string;
    challenge: string;
  };
  const primary = doc.primaryMetric as { number: string; label: string };
  const secondary = doc.secondaryMetric as { number: string; label: string };
  const time = doc.timeToResults as { number: string; label: string };

  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title: doc.title,
            description: doc.metaDescription,
            url: doc.url,
            datePublished: doc.publishedAt,
          }),
        ]}
      />

      <div className="max-w-content mx-auto px-6 py-16 grid lg:grid-cols-[1fr_320px] gap-10 items-start">
        <div className="min-w-0">
          <header className="border-b border-brand-purple/20 pb-8">
            <span className="bg-brand-purple text-white text-[10px] uppercase tracking-widest font-medium px-2 py-1">
              {doc.industry}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl mt-4 leading-tight">
              {doc.resultHeadline}
            </h1>
            <dl className="mt-8 grid sm:grid-cols-3 gap-6 text-sm font-body">
              <div>
                <dt className="text-white/50 uppercase tracking-widest text-xs">Industry</dt>
                <dd className="mt-1 text-white">{overview.industry}</dd>
              </div>
              <div>
                <dt className="text-white/50 uppercase tracking-widest text-xs">Size</dt>
                <dd className="mt-1 text-white">{overview.size}</dd>
              </div>
              <div>
                <dt className="text-white/50 uppercase tracking-widest text-xs">Challenge</dt>
                <dd className="mt-1 text-white">{overview.challenge}</dd>
              </div>
            </dl>
          </header>

          <section className="mt-10">
            <h2 className="font-heading text-2xl md:text-3xl">The Problem</h2>
            <p className="mt-4 font-body text-white/80 leading-relaxed">
              {doc.summary}
            </p>
            <ul className="mt-6 space-y-2 font-body text-white/85 list-disc pl-6 marker:text-brand-purple">
              {doc.painPoints.map((pp) => (
                <li key={pp}>{pp}</li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-2xl md:text-3xl">The Solution</h2>
            <p className="mt-4 font-body text-white/80 leading-relaxed">
              {doc.solutionSummary}
            </p>
            <div className="mt-6">
              <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
                [ integrations ]
              </span>
              <ul className="mt-3 flex flex-wrap gap-2">
                {doc.integrations.map((i) => (
                  <li
                    key={i}
                    className="border border-brand-cyan/40 text-brand-cyan text-xs px-3 py-1 font-mono"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-2xl md:text-3xl">Results</h2>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <StatCard number={primary.number} label={primary.label} />
              <StatCard number={secondary.number} label={secondary.label} accent="purple" />
              <StatCard number={time.number} label={time.label} />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="font-heading text-2xl md:text-3xl">Call Recording</h2>
            <div className="mt-4">
              {/* EMBED REAL CALL RECORDING HERE — this section is a lead magnet */}
              <AudioPlayer label="Sample call from this deployment" />
              <details className="mt-4 border border-brand-purple/20 p-4">
                <summary className="cursor-pointer text-white font-body text-sm">
                  View transcript
                </summary>
                <p className="mt-3 text-white/70 text-sm font-mono leading-relaxed whitespace-pre-line">
                  {`[00:00] Agent: Thank you for calling Northwind HVAC.
[00:04] Caller: Hi, my system stopped blowing cold air...
[PLACEHOLDER TRANSCRIPT — REPLACE WITH REAL TEXT]`}
                </p>
              </details>
            </div>
          </section>

          <section className="mt-12 prose-implenix">
            <MDX components={mdxComponents} />
          </section>

          <RelatedContent topic="More case studies" type="case-study" />
        </div>

        <aside className="lg:sticky lg:top-24 border border-brand-purple/30 bg-black p-6">
          <h3 className="font-heading text-xl text-white">
            Get the same results for your business
          </h3>
          <p className="mt-2 text-sm text-white/70 font-body">
            We will scope a deployment for your team in 15 minutes.
          </p>
          <div className="mt-4">
            <LeadForm variant="demo" ctaLocation={`case-study-${doc.slug}`} />
          </div>
        </aside>
      </div>
    </>
  );
}
