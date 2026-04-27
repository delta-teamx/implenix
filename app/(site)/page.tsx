import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { IndustriesGrid } from '@/components/sections/IndustriesGrid';
import { IntegrationStrip } from '@/components/sections/IntegrationStrip';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { DemoCTASection } from '@/components/sections/DemoCTASection';
import { ROICalculator } from '@/components/common/ROICalculator';
import { StickyDemoCTA } from '@/components/common/StickyDemoCTA';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'AI Receptionist for Local Businesses | Implenix',
  description:
    'Implenix builds and deploys AI voice agents that answer, qualify, and book every call for local businesses. Never miss a lead again.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      <SchemaOrg schema={[organizationSchema(), websiteSchema()]} />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <IndustriesGrid />
      <IntegrationStrip />
      <TestimonialsSection />
      <CaseStudiesPreview />
      <section className="bg-brand-dark border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-24">
          <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
            Calculate what missed calls are costing you
          </h2>
          <p className="mt-4 font-body text-white/70 max-w-2xl">
            Plug in your numbers. See the monthly cost. Unlock the full
            breakdown to share with your team.
          </p>
          <div className="mt-12">
            <ROICalculator />
          </div>
        </div>
      </section>
      <DemoCTASection />
      <StickyDemoCTA />
    </>
  );
}
