import { IndustryCard } from '@/components/common/IndustryCard';
import { INDUSTRIES, industryUrl } from '@/lib/industries';

export function IndustriesGrid() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
          Built for the businesses that run on calls
        </h2>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
