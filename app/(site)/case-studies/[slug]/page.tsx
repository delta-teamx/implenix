import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allCaseStudies } from 'contentlayer/generated';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { DividedStats } from '@/components/common/DividedStats';
import { AudioPlayer } from '@/components/common/AudioPlayer';
import { GhlForm } from '@/components/common/GhlForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
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

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Case Studies', href: '/case-studies' },
              { label: doc.industry, href: `/case-studies/${doc.slug}` },
            ]}
            className="mb-6"
          />
          <Link
            href="/case-studies"
            data-cta-location="case-study-back"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-brand-cyan font-mono mb-8 hover:opacity-80"
          >
            <ArrowLeft size={12} /> All case studies
          </Link>
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <Badge label={`Case Study · ${doc.industry}`} variant="purple" />
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
                {doc.resultHeadline}
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                {doc.summary}
              </p>
            </div>
            <aside className="lg:col-span-4">
              <dl className="border border-brand-cyan/30 bg-black divide-y divide-brand-purple/15">
                <Item label="Industry" value={overview.industry} />
                <Item label="Size" value={overview.size} />
                <Item label="Challenge" value={overview.challenge} />
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <SectionHeader
            eyebrow="Outcomes"
            title="The numbers from this deployment"
          />
          <div className="mt-12">
            <DividedStats
              stats={[primary, secondary, time]}
            />
          </div>
        </div>
      </section>

      <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-[1fr_320px] gap-10 items-start border-t border-brand-purple/15">
        <div className="min-w-0 flex flex-col gap-16">
          <section>
            <SectionHeader eyebrow="The problem" title="What broke" badgeVariant="purple" />
            <p className="mt-6 font-body text-white/80 leading-relaxed">
              {doc.summary}
            </p>
            <ul className="mt-6 space-y-3 font-body text-white/85">
              {doc.painPoints.map((pp) => (
                <li
                  key={pp}
                  className="flex items-start gap-3 border-l-[3px] border-brand-purple bg-black p-4"
                >
                  <span>{pp}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <SectionHeader eyebrow="The solution" title="What we shipped" />
            <p className="mt-6 font-body text-white/80 leading-relaxed">
              {doc.solutionSummary}
            </p>
            <div className="mt-8 border border-brand-cyan/30 bg-black p-6">
              <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
                ▸ Integrations
              </span>
              <ul className="mt-4 flex flex-wrap gap-2">
                {doc.integrations.map((i) => (
                  <li
                    key={i}
                    className="border border-brand-cyan/40 text-brand-cyan text-xs px-3 py-1.5 font-mono"
                  >
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <SectionHeader
              eyebrow="Listen"
              title="Sample call from this deployment"
              description="Real audio from a live call after go-live."
              badgeVariant="purple"
            />
            <div className="mt-6">
              {/* EMBED REAL CALL RECORDING HERE — this section is a lead magnet */}
              <AudioPlayer label="Sample call recording" />
              <details className="mt-4 border border-brand-purple/20 p-5 bg-black">
                <summary className="cursor-pointer text-white font-body text-sm">
                  View transcript
                </summary>
                <p className="mt-4 text-white/70 text-sm font-mono leading-relaxed whitespace-pre-line">
                  {`[00:00] Agent: Thank you for calling Northwind HVAC.
[00:04] Caller: Hi, my system stopped blowing cold air...
[PLACEHOLDER TRANSCRIPT — REPLACE WITH REAL TEXT]`}
                </p>
              </details>
            </div>
          </section>

          <section className="prose-implenix">
            <MDX components={mdxComponents} />
          </section>

          <RelatedContent topic="More case studies" type="case-study" />
        </div>

        <aside className="lg:sticky lg:top-24 border border-brand-purple/30 bg-black p-6 flex flex-col gap-4">
          <Badge label="Get the same result" variant="cyan" />
          <h3 className="font-heading text-xl text-white leading-snug">
            Run this playbook for your business
          </h3>
          <p className="text-sm text-white/70 font-body leading-relaxed">
            We will scope a deployment for your team in 15 minutes.
          </p>
          <GhlForm
            formKey="caseStudy"
            ctaLocation={`case-study-${doc.slug}`}
            height={520}
          />
          <Link
            href="/case-studies"
            data-cta-location="case-study-sidebar"
            className="inline-flex items-center gap-1.5 text-brand-cyan text-sm hover:underline mt-2"
          >
            Browse other case studies <ArrowRight size={14} />
          </Link>
        </aside>
      </div>
    </>
  );
}

function Item({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-5">
      <dt className="text-xs uppercase tracking-widest text-white/55 font-mono">
        {label}
      </dt>
      <dd className="mt-1 font-body text-white text-sm">{value}</dd>
    </div>
  );
}
