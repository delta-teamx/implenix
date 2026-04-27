import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Play, ShieldCheck } from 'lucide-react';
import { LeadForm } from '@/components/common/LeadForm';
import { StatCard } from '@/components/common/StatCard';
import { TestimonialCard } from '@/components/common/TestimonialCard';
import { buildMetadata } from '@/lib/seo';
import { INDUSTRIES, getIndustryBySlug } from '@/lib/industries';

type Variant = 'a' | 'b';
type LandingConfig = {
  slug: string;
  variant: Variant;
  industryName: string;
  headline: string;
  subhead: string;
  benefits?: string[];
  testimonialQuote?: string;
  stat?: { number: string; label: string };
  hookHeadline?: string;
};

// PRIMARY KEYWORD-MATCHED LANDING PAGES (Variant A — Google Search Ad)
const variantA: LandingConfig[] = INDUSTRIES.map((i) => ({
  slug: `ai-receptionist-${i.slug}`,
  variant: 'a' as const,
  industryName: i.name,
  headline: `AI Receptionist for ${i.name} Businesses`,
  subhead:
    'Answer every inbound call. Qualify the lead. Book the appointment. Built for your industry, deployed in 7–14 days.',
  benefits: [
    '24/7 inbound coverage with custom call scripts',
    'Live calendar booking and CRM sync',
    'Live transfer to your team when needed',
  ],
  testimonialQuote:
    'PLACEHOLDER — We stopped losing after-hours calls overnight. The agent books while we sleep.',
  stat: { number: '<60s', label: 'average pickup time' },
}));

// META AWARENESS LANDING PAGES (Variant B)
const variantB: LandingConfig[] = [
  {
    slug: 'never-miss-a-call',
    variant: 'b',
    industryName: 'Local Business',
    hookHeadline: 'You missed 6 calls today. We can fix that.',
    headline: 'You missed 6 calls today. We can fix that.',
    subhead:
      'Implenix deploys an AI voice agent that answers every inbound call for your business. Free 15-minute audit.',
  },
];

const ALL: LandingConfig[] = [...variantA, ...variantB];

type Params = { slug: string };

export function generateStaticParams() {
  return ALL.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const cfg = ALL.find((c) => c.slug === params.slug);
  if (!cfg) return {};
  return buildMetadata({
    title: `${cfg.headline} | Implenix`,
    description: cfg.subhead,
    path: `/lp/${cfg.slug}`,
    noindex: true,
  });
}

export default function LandingPage({ params }: { params: Params }) {
  const cfg = ALL.find((c) => c.slug === params.slug);
  if (!cfg) notFound();
  return cfg.variant === 'a' ? <VariantA cfg={cfg} /> : <VariantB cfg={cfg} />;
}

// Variant A — Google Search Ad: form above the fold, single focused CTA.
function VariantA({ cfg }: { cfg: LandingConfig }) {
  return (
    <>
      {/* META PIXEL: REPLACE 000000000000000 — fires PageView automatically. */}
      {/* GOOGLE ADS CONVERSION: REPLACE AW-XXXXXXXXXX/CONVERSION_LABEL on lead submit */}
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
              [ landing // search ad ]
            </span>
            <h1 className="font-heading text-3xl md:text-5xl mt-4 leading-tight">
              {cfg.headline}
            </h1>
            <p className="mt-4 font-body text-white/80 text-lg max-w-2xl">
              {cfg.subhead}
            </p>
            <ul className="mt-8 space-y-3">
              {cfg.benefits?.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 font-body text-white"
                >
                  <ShieldCheck size={18} className="text-brand-cyan mt-0.5 shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              {cfg.testimonialQuote && (
                <TestimonialCard
                  businessName={`${cfg.industryName} Operator`}
                  ownerName="PLACEHOLDER"
                  industry={cfg.industryName}
                  quote={cfg.testimonialQuote}
                />
              )}
            </div>
            {cfg.stat && (
              <div className="mt-6 max-w-sm">
                <StatCard
                  number={cfg.stat.number}
                  label={cfg.stat.label}
                  accent="cyan"
                />
              </div>
            )}
          </div>

          <aside id="lp-form" className="lg:col-span-5 border border-brand-purple/30 bg-black p-6 lg:sticky lg:top-6">
            <h2 className="font-heading text-2xl text-white">
              Get a free audit
            </h2>
            <p className="mt-2 text-sm text-white/70 font-body">
              We will run an Implenix audit on your inbound calls and book a
              15-minute walkthrough.
            </p>
            <div className="mt-5">
              <LeadForm variant="lp" ctaLocation={`lp-${cfg.slug}-top`} />
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="font-heading text-2xl md:text-4xl">
            One more time — let’s book it
          </h2>
          <div className="mt-6 max-w-xl">
            <LeadForm variant="lp" ctaLocation={`lp-${cfg.slug}-bottom`} />
          </div>
        </div>
      </section>
    </>
  );
}

// Variant B — Meta Awareness: hook headline + minimal form.
function VariantB({ cfg }: { cfg: LandingConfig }) {
  return (
    <>
      {/* META PIXEL: REPLACE 000000000000000 — fires PageView automatically. */}
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24 text-center">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ landing // meta ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4 max-w-3xl mx-auto leading-tight">
            {cfg.hookHeadline ?? cfg.headline}
          </h1>
          <p className="mt-4 font-body text-white/80 max-w-2xl mx-auto">
            {cfg.subhead}
          </p>
          <div className="mt-10 max-w-2xl mx-auto border border-brand-purple/30 bg-black p-3 aspect-video flex items-center justify-center">
            <div className="w-16 h-16 bg-brand-purple flex items-center justify-center rounded-sm">
              <Play size={28} className="text-white" />
            </div>
          </div>
          <div className="mt-10 flex justify-center gap-3 flex-wrap font-mono text-xs uppercase tracking-widest text-white/60">
            <span className="border border-brand-cyan/40 px-3 py-1">10 specialists</span>
            <span className="border border-brand-cyan/40 px-3 py-1">7–14 day deploy</span>
            <span className="border border-brand-cyan/40 px-3 py-1">24/7 coverage</span>
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-16">
          <h2 className="font-heading text-2xl md:text-3xl text-center">
            Get your free audit
          </h2>
          <div className="mt-6 max-w-md mx-auto border border-brand-purple/30 p-6 bg-brand-dark">
            <LeadForm variant="lp" ctaLocation={`lp-${cfg.slug}`} />
          </div>
        </div>
      </section>
    </>
  );
}
