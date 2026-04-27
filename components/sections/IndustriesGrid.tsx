import { SectionHeader } from '@/components/common/SectionHeader';
import { IndustryCard } from '@/components/common/IndustryCard';
import { INDUSTRIES, industryUrl } from '@/lib/industries';

export function IndustriesGrid() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Built for"
          title="The businesses that run on calls"
          description="Each Implenix deployment ships with an industry-specific call script, intake logic, and CRM mapping. Pick the one that fits."
          badgeVariant="purple"
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard
              key={industry.slug}
              industry={industry.name}
              painPoint={industry.painPoint}
              href={industryUrl(industry.slug)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
