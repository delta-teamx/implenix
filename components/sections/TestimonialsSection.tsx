import { TestimonialCard } from '@/components/common/TestimonialCard';

const PLACEHOLDERS = [
  {
    businessName: 'Northwind HVAC',
    ownerName: 'Maria L.',
    industry: 'HVAC',
    quote:
      'We stopped losing after-hours emergency calls overnight. The Implenix agent books before our techs are awake. [PLACEHOLDER]',
  },
  {
    businessName: 'Brightline Dental',
    ownerName: 'Dr. Chen',
    industry: 'Dental',
    quote:
      'Front desk went from drowning to caught up. Every call is logged and every booking lands on the right calendar. [PLACEHOLDER]',
  },
  {
    businessName: 'Summit Realty Group',
    ownerName: 'Jordan K.',
    industry: 'Real Estate',
    quote:
      'First-call response time is now under 60 seconds. We win listings that used to slip through. [PLACEHOLDER]',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
          Verified results from real businesses
        </h2>
        {/* REPLACE WITH REAL TESTIMONIALS + REAL RECORDING LINKS */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {PLACEHOLDERS.map((t) => (
            <TestimonialCard key={t.businessName} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
