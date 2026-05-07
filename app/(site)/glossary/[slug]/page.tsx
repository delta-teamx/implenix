import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { faqSchema, articleSchema } from '@/lib/schema';
import { buildMetadata, SITE_NAME } from '@/lib/seo';
import {
  GLOSSARY_SLUGS,
  GLOSSARY_ENTRIES,
  getGlossaryEntry,
} from '@/lib/seo/glossary';

type Params = { slug: string };

export function generateStaticParams() {
  return GLOSSARY_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) return {};
  return buildMetadata({
    title: entry.metaTitle,
    description: entry.metaDescription,
    path: `/glossary/${entry.slug}`,
  });
}

export default function GlossaryEntryPage({ params }: { params: Params }) {
  const entry = getGlossaryEntry(params.slug);
  if (!entry) notFound();

  const url = `/glossary/${entry.slug}`;

  // Sibling entries for cross-link
  const siblings = GLOSSARY_ENTRIES.filter((e) => e.slug !== entry.slug)
    .slice(0, 3)
    .map((e) => ({
      href: `/glossary/${e.slug}`,
      label: e.term,
    }));

  return (
    <>
      <SchemaOrg
        schema={[
          articleSchema({
            title: entry.term,
            description: entry.metaDescription,
            url,
            datePublished: new Date().toISOString().slice(0, 10),
            author: SITE_NAME,
          }),
          faqSchema(entry.faqs),
        ]}
      />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-16 md:pt-24 md:pb-20">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Glossary', href: '/glossary' },
              { label: entry.term, href: url },
            ]}
            className="mb-6"
          />
          <Link
            href="/glossary"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-brand-cyan font-mono mb-8 hover:opacity-80"
          >
            <ArrowLeft size={12} /> All terms
          </Link>
          <div className="max-w-3xl flex flex-col gap-6">
            <Badge label="Glossary entry" variant="cyan" />
            <h1 className="font-heading text-4xl md:text-6xl leading-[1.04]">
              {entry.term}
            </h1>
            <p className="font-body text-white/80 text-lg leading-relaxed">
              {entry.shortDefinition}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Definition" title={`What ${entry.term} means`} />
            <p className="mt-8 font-body text-white/80 text-base lg:text-lg leading-relaxed">
              {entry.intro}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <SectionHeader
              eyebrow="At a glance"
              title="Key points"
              badgeVariant="purple"
            />
            <ul className="mt-8 flex flex-col gap-3">
              {entry.keyPoints.map((point, i) => (
                <li
                  key={point}
                  className="flex items-start gap-3 border-l-[3px] border-brand-cyan bg-black p-4"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan w-6 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-body text-sm text-white/85 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <SectionHeader eyebrow="Related" title="Related pages on Implenix" />
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {entry.related.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 border border-brand-purple/20 hover:border-brand-purple bg-black p-4 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen size={14} className="text-brand-cyan" />
                      <span className="font-body text-sm text-white">
                        {link.label}
                      </span>
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-brand-cyan transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <SectionHeader eyebrow="FAQ" title="Common questions" badgeVariant="purple" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {entry.faqs.map((f) => (
              <div
                key={f.question}
                className="border border-brand-purple/20 bg-black p-6"
              >
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-3 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <Badge label="Beyond definitions" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.05]">
              Find out what this term means for your numbers.
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-xl">
              60-second audit. We estimate the missed-call cost for your
              business and a deployment plan to recover it.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3">
            <Link
              href="/audit"
              data-cta-location={`glossary-${entry.slug}-bottom`}
              data-cta-type="primary"
              className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get my audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/glossary"
              data-cta-location={`glossary-${entry.slug}-bottom`}
              data-cta-type="secondary"
              className="inline-flex items-center justify-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
            >
              Browse all terms
            </Link>
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <RelatedContent topic="More from the glossary" type="resource" links={siblings} />
        </div>
      </section>
    </>
  );
}
