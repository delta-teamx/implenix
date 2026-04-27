import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allIndustries } from 'contentlayer/generated';
import { StatCard } from '@/components/common/StatCard';
import { CaseStudyCard } from '@/components/common/CaseStudyCard';
import { LeadForm } from '@/components/common/LeadForm';
import { RelatedContent } from '@/components/common/RelatedContent';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { localBusinessSchema, faqSchema } from '@/lib/schema';
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
        ]}
      />

      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              [ industry // {doc.industry.toLowerCase()} ]
            </span>
            <h1 className="font-heading text-4xl md:text-6xl mt-4 leading-tight">
              {doc.title}
            </h1>
            <p className="mt-6 font-body text-lg text-white/80 max-w-2xl">
              {doc.metaDescription}
            </p>
          </div>
          <div className="lg:col-span-5 border-l-[3px] border-brand-cyan bg-black p-6">
            <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
              [ result snapshot ]
            </span>
            <p className="font-heading text-5xl md:text-6xl text-brand-cyan mt-3 leading-none">
              {doc.heroStat}
            </p>
            <p className="mt-2 font-body text-white/85">{doc.heroStatLabel}</p>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            What is broken today
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {painPoints.map((pp, idx) => (
              <div key={pp.title} className="bg-black border border-brand-purple/20 p-6">
                <span className="font-heading text-3xl text-brand-purple block">
                  0{idx + 1}
                </span>
                <h3 className="font-heading text-xl mt-3 text-white">{pp.title}</h3>
                <p className="mt-2 font-body text-sm text-white/75 leading-relaxed">
                  {pp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            How Implenix solves it
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="border-l-[3px] border-brand-cyan bg-black p-6">
                <h3 className="font-heading text-xl text-white">{s.title}</h3>
                <p className="mt-2 font-body text-sm text-white/75 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">By the numbers</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <StatCard
                key={s.label}
                number={s.number}
                label={s.label}
                accent={i % 2 === 0 ? 'cyan' : 'purple'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-stretch">
          <CaseStudyCard
            industry={doc.industry}
            resultHeadline={`${doc.industry}: ${doc.heroStat} ${doc.heroStatLabel}`}
            summary="Read the full case study to see the deployment timeline, integrations, and verified results."
            href={`/case-studies/${doc.caseStudySlug}`}
          />
          <blockquote className="bg-white text-black border-t-[3px] border-brand-purple p-6">
            <p className="font-body italic text-black/80 leading-relaxed">
              “{doc.testimonialQuote}”
            </p>
            <footer className="mt-4 text-sm font-body text-black/60">
              — {doc.testimonialAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="bg-black">
        <div className="max-w-content mx-auto px-6 py-20">
          <h2 className="font-heading text-3xl md:text-4xl">
            Frequently asked
          </h2>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {faq.map((f) => (
              <div key={f.question} className="border border-brand-purple/20 p-5">
                <p className="font-heading text-white text-lg">{f.question}</p>
                <p className="mt-2 font-body text-sm text-white/75 leading-relaxed">
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">
              Get a custom Implenix demo for your {doc.industry} business
            </h2>
            <p className="mt-4 font-body text-white/75 max-w-md">
              We will set up a live test against your business and walk you
              through the agent end to end.
            </p>
          </div>
          <div className="border border-brand-purple/30 bg-black p-6">
            <LeadForm variant="demo" ctaLocation={`industry-${slug}`} />
          </div>
        </div>
        <div className="max-w-content mx-auto px-6 pb-12">
          <div className="prose-implenix max-w-3xl">
            <MDX components={mdxComponents} />
          </div>
          <RelatedContent topic={`More for ${doc.industry}`} type="industry" />
        </div>
      </section>
    </>
  );
}
