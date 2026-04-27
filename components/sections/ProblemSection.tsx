import { StatCard } from '@/components/common/StatCard';

export function ProblemSection() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
          Every missed call is a deal you already lost
        </h2>
        {/* VERIFY THESE STATS BEFORE LAUNCH — replace with sourced data */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <StatCard
            number="62%"
            label="of inbound calls to local businesses go unanswered"
            accent="purple"
          />
          <StatCard
            number="78%"
            label="of leads go with the first business that calls them back"
          />
          <StatCard
            number="$400+"
            label="average value of a single missed service call"
            accent="purple"
          />
        </div>
      </div>
    </section>
  );
}
