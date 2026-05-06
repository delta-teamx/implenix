import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allIndustries } from 'contentlayer/generated';
import { CaseStudyCard } from '@/components/common/CaseStudyCard';
import { GhlForm } from '@/components/common/GhlForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { Badge } from '@/components/common/Badge';
import { SectionHeader } from '@/components/common/SectionHeader';
import { DividedStats } from '@/components/common/DividedStats';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { localBusinessSchema, faqSchema, serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { INDUSTRIES, industryUrl } from '@/lib/industries';

type Params = { industry: string };

const VALID_SLUGS = INDUSTRIES.map((i) => i.slug);

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ industry: slug }));
}

function getDoc(slug: string) {
  return allIndustries.find((d) => d.slug === slug);
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const slug = params.industry;
  if (!VALID_SLUGS.includes(slug)) return {};
  const doc = getDoc(slug);
  if (!doc) return {};
  return buildMetadata({
    title: doc.metaTitle,
    description: doc.metaDescription,
    path: industryUrl(slug),
  });
}

export default function IndustryPage({ params }: { params: Params }) {
  const slug = params.industry;
  if (!VALID_SLUGS.includes(slug)) notFound();
  const doc = getDoc(slug);
  if (!doc) notFound();

  const MDX = useMDXComponent(doc.body.code);
  const painPoints = doc.painPoints as Array<{ title: string; description: string }>;
  const solutions = doc.solutions as Array<{ title: string; description: string }>;
  const stats = doc.stats as Array<{ number: string; label: string }>;
  const faq = doc.faq as Array<{ question: string; answer: string }>;

  return (
    <>
      <SchemaOrg
        schema={[
          localBusinessSchema(doc.industry, doc.url),
          faqSchema(faq),
          serviceSchema({
            name: `AI Receptionist for ${doc.industry}`,
            description: doc.metaDescription,
            serviceType: 'AI Receptionist',
            url: doc.url,
          }),
        ]}
      />

      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-20 pb-20 md:pt-24 md:pb-24">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', href: '/' },
              { label: 'Industries', href: industryUrl('hvac') },
              { label: doc.industry, href: industryUrl(slug) },
            ]}
            className="mb-8"
          />
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <Badge label={`Industry · ${doc.industry}`} variant="cyan" />
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
                {doc.title}
              </h1>
              <p className="font-body text-white/80 text-lg max-w-2xl leading-relaxed">
                {doc.metaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="#demo"
                  data-cta-location="industry-hero"
                  data-cta-type="primary"
                  className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
                >
                  Get a Demo <ArrowRight size={16} />
                </Link>
                <Link
                  href={`/case-studies/${doc.caseStudySlug}`}
                  data-cta-location="industry-hero"
                  data-cta-type="secondary"
                  className="inline-flex items-center justify-center border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
                >
                  Read the case study
                </Link>
              </div>
            </div>
            <aside className="lg:col-span-5">
              <div className="border border-brand-cyan/30 bg-black p-8">
                <span className="text-xs uppercase tracking-widest text-white/55 font-mono">
                  ▸ result snapshot
                </span>
                <p className="font-heading text-6xl md:text-7xl text-brand-cyan mt-3 leading-none">
                  {doc.heroStat}
                </p>
                <p className="mt-3 font-body text-white/80 max-w-xs">
                  {doc.heroStatLabel}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Pain points"
            title="What is broken today"
            badgeVariant="purple"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {painPoints.map((pp, idx) => (
              <div
                key={pp.title}
                className="bg-black border border-brand-purple/20 p-6 flex flex-col gap-3"
              >
                <span className="font-mono text-xs text-brand-purple uppercase tracking-widest">
                  Problem 0{idx + 1}
                </span>
                <h3 className="font-heading text-xl text-white">{pp.title}</h3>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  {pp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="The fix"
            title="How Implenix solves it"
          />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {solutions.map((s, i) => (
              <div
                key={s.title}
                className="bg-black border border-brand-purple/20 p-6 flex flex-col gap-3"
              >
                <span className="font-mono text-xs text-brand-cyan uppercase tracking-widest">
                  Step 0{i + 1}
                </span>
                <h3 className="font-heading text-xl text-white">{s.title}</h3>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="Outcomes"
            title="By the numbers"
            badgeVariant="purple"
          />
          <div className="mt-12">
            <DividedStats stats={stats} />
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-2 gap-6 items-stretch">
          <CaseStudyCard
            industry={doc.industry}
            resultHeadline={`${doc.industry}: ${doc.heroStat} ${doc.heroStatLabel}`}
            summary="Read the full case study to see the deployment timeline, integrations, and verified results."
            href={`/case-studies/${doc.caseStudySlug}`}
          />
          <blockquote className="bg-white text-black border-t-[3px] border-brand-purple p-6 flex flex-col gap-4">
            <p className="font-body italic text-black/80 leading-relaxed">
              “{doc.testimonialQuote}”
            </p>
            <footer className="mt-auto text-sm font-body text-black/60">
              — {doc.testimonialAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader eyebrow="FAQ" title="Frequently asked" />
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {faq.map((f) => (
              <div key={f.question} className="border border-brand-purple/20 p-6">
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-3 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="bg-brand-dark border-t border-brand-purple/15"
      >
        <div className="max-w-content mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10">
          <SectionHeader
            eyebrow="Get started"
            title={`Get a custom demo for your ${doc.industry} business`}
            description="We will set up a live test against your business and walk you through the agent end to end."
            badgeVariant="purple"
          />
          <GhlForm
            formKey="industry"
            ctaLocation={`industry-${slug}`}
            height={620}
          />
        </div>
        <div className="max-w-content mx-auto px-6 pb-16">
          <div className="prose-implenix max-w-3xl">
            <MDX components={mdxComponents} />
          </div>
          <RelatedContent topic={`More for ${doc.industry}`} type="industry" />
        </div>
      </section>
    </>
  );
}
