import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { CostOfNothingSection } from '@/components/sections/CostOfNothingSection';
import { LiveCallsSection } from '@/components/sections/LiveCallsSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { IntegrationStrip } from '@/components/sections/IntegrationStrip';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { QuoteSection } from '@/components/sections/QuoteSection';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { ROICalculator } from '@/components/common/ROICalculator';
import { StickyDemoCTA } from '@/components/common/StickyDemoCTA';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AIReceptionistFlow } from '@/components/common/AIReceptionistFlow';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import {
  organizationSchema,
  websiteSchema,
  softwareApplicationSchema,
  faqSchema,
  serviceSchema,
  speakableSchema,
} from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Receptionist for Local Business | Implenix',
  description:
    'AI Receptionist that answers, qualifies, and books every inbound call 24/7 for local business. Fixed monthly cost. Deployed in 7-14 days.',
  path: '/',
});

const HOME_FAQS = [
  {
    question: 'What is an AI receptionist?',
    answer:
      'An AI receptionist is a voice-AI agent that answers your business phone 24/7, holds a natural conversation with the caller, qualifies the lead, books appointments live against your calendar, and writes every call to your CRM in real time. Implenix is a production AI receptionist deployed for local business — HVAC, dental, real estate, law, medspa, home improvement, and 20+ more industries.',
  },
  {
    question: 'How much does an AI receptionist cost?',
    answer:
      'Implenix AI Receptionist pricing starts at $297/month for local single-location businesses (100-500 calls/month), $497/month for growing multi-line operations, and $697-$1,497/month for multi-location deployments. All tiers include 24/7 coverage, unlimited concurrent calls, two-way CRM sync, and live calendar booking at fixed monthly cost — no per-minute billing.',
  },
  {
    question: 'How is Implenix different from an answering service?',
    answer:
      'Implenix answers within one ring, holds unlimited concurrent calls, books appointments live against your actual calendar, and writes to your CRM in real time — all at fixed monthly cost. Traditional answering services bill per-minute (cost scales up with volume), stall at operator turnover, and typically send you next-morning email summaries instead of live CRM sync. Read the honest comparison at /ai-receptionist-vs-answering-service.',
  },
  {
    question: 'How long does deployment take?',
    answer:
      'Most Implenix deployments run 7-14 business days: 1-2 days discovery, 3-7 days build and integration, 3-5 days parallel run against your existing flow, then cutover. Legal, healthcare, and financial deployments run 14-24 days because of compliance review.',
  },
  {
    question: 'Does the AI actually replace a receptionist?',
    answer:
      'For routine inbound work — booking, qualification, intake, recurring service — yes, at production quality. For calls that require real human judgment or empathy (crisis intake, complex sales negotiation, sensitive conversations), the AI transfers live to a human on your team within 30 seconds. The 2026 pattern that works: AI-first for the routine 70-90% of volume, humans for the 10-30% that requires judgment.',
  },
  {
    question: 'Which industries do you support?',
    answer:
      'Implenix ships tuned playbooks for 25 industries: HVAC, dental, real estate, law firms, plumbers, med spas, auto repair, roofers, medical practices, electricians, contractors, salons, accountants, marketing agencies, cleaning services, mortgage brokers, insurance agents, veterinarians, chiropractors, therapists, spas, landscapers, pest control, moving companies, and personal trainers.',
  },
];

export default function HomePage() {
  return (
    <>
      <SchemaOrg
        schema={[
          organizationSchema(),
          websiteSchema(),
          softwareApplicationSchema({ ratingValue: 5, ratingCount: 6 }),
          serviceSchema({
            name: 'AI Receptionist',
            description:
              'AI Receptionist for local business — answers, qualifies, and books every inbound call 24/7 at fixed monthly cost.',
            serviceType: 'AI Receptionist',
            url: '/',
          }),
          faqSchema(HOME_FAQS),
          speakableSchema(),
        ]}
      />
      <Hero />

      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span
                data-speakable
                className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 bg-brand-cyan" /> Quick answer
              </span>
              <h2
                data-answer
                data-speakable
                className="font-heading text-2xl md:text-3xl lg:text-4xl text-white leading-[1.1]"
              >
                What is an AI receptionist?
              </h2>
              <p
                data-answer
                data-speakable
                className="font-body text-white/85 leading-relaxed text-base md:text-lg"
              >
                A voice-AI agent that answers your business phone{' '}
                <span className="text-brand-cyan">24/7</span>, holds a
                natural conversation with the caller, qualifies the lead,
                books appointments{' '}
                <span className="text-brand-cyan">live against your
                calendar</span>, and writes every call to your CRM in
                real time.
              </p>
              <p className="font-body text-white/70 leading-relaxed text-sm md:text-base">
                Implenix replaces the missed-call cost of voicemail and
                the per-minute cost of live answering services with{' '}
                <span className="text-white font-medium">fixed monthly
                pricing — $297-$697/month</span> — and handles unlimited
                concurrent calls without extra headcount. In 2026 it is
                indistinguishable from a human operator for routine
                booking, qualification, and intake calls.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="inline-flex items-center gap-1.5 border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono uppercase tracking-widest px-3 py-1.5">
                  Fixed monthly pricing
                </span>
                <span className="inline-flex items-center gap-1.5 border border-brand-purple/40 text-brand-purple text-[10px] font-mono uppercase tracking-widest px-3 py-1.5">
                  Live CRM sync
                </span>
                <span className="inline-flex items-center gap-1.5 border border-brand-cyan/40 text-brand-cyan text-[10px] font-mono uppercase tracking-widest px-3 py-1.5">
                  Unlimited concurrent
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <AIReceptionistFlow />
            </div>
          </div>
        </div>
      </section>

      <CostOfNothingSection />
      <LiveCallsSection />
      <HowItWorks />
      <ComparisonSection />
      <IndustriesGrid />
      <IntegrationStrip />
      <QuoteSection />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <SectionHeader
            eyebrow="ROI calculator"
            title="Calculate what missed calls are costing you"
            description="Plug in your numbers. See the monthly cost. Talk to the team about a real deployment."
            badgeVariant="purple"
          />
          <div className="mt-12">
            <ROICalculator />
          </div>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 md:py-24">
          <SectionHeader
            eyebrow="FAQ"
            title="AI Receptionist — frequently asked"
            description="Fastest way to answer the questions every operator asks before booking a scoping call."
          />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {HOME_FAQS.map((f) => (
              <div
                key={f.question}
                className="border border-brand-purple/25 bg-black p-6"
              >
                <p
                  className="font-heading text-white text-lg leading-snug faq-question"
                  data-speakable
                >
                  {f.question}
                </p>
                <p
                  className="mt-3 font-body text-sm text-white/75 leading-relaxed faq-answer"
                  data-speakable
                >
                  {f.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoCTASection />
      <StickyDemoCTA />
    </>
  );
}
