import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProblemSection } from '@/components/sections/ProblemSection';
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
            description="Plug in your numbers. See the monthly cost. Unlock the full breakdown to share with your team."
            badgeVariant="purple"
          />
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
