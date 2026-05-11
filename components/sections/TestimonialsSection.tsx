import { SectionHeader } from '@/components/common/SectionHeader';
import { TestimonialCard } from '@/components/common/TestimonialCard';

const TESTIMONIALS = [
  {
    businessName: 'PA HVAC Experts',
    ownerName: 'Alex',
    industry: 'HVAC',
    quote:
      'The best AI employee I have ever hired. It talks to every incoming call, nurtures my leads, books appointments, and sends follow-ups to me and the customer. Thank you Implenix.',
    recordingHref: '/case-studies/placeholder-hvac',
  },
  {
    businessName: 'Columbus Property',
    ownerName: 'Yessy',
    industry: 'Real Estate',
    quote:
      'We juggle deals, appointments, and follow-ups all day. Implenix books and follows up — we just close. That is the operation now.',
    recordingHref: '/case-studies/placeholder-real-estate',
  },
  {
    businessName: 'Ohio Dental',
    ownerName: 'Hyder',
    industry: 'Dental',
    quote:
      'The team was spending 2–3 hours a day answering the phone and our in-house attention was slipping. Implenix handles the phone amazingly and the team is back focused on patients.',
    recordingHref: '/case-studies/placeholder-dental',
  },
  {
    businessName: 'GTR Improvements',
    ownerName: 'Lexi',
    industry: 'Home Improvements',
    quote:
      'Urgent calls, building team comms, scheduling assessments, quality checks across roof, kitchen, and bath — the day was gone. Implenix runs the communication now and it sounds like a full professional team.',
    recordingHref: '/case-studies/gtr-improvements-lexi',
  },
  {
    businessName: 'Parnell Motors',
    ownerName: 'Parnell',
    industry: 'Auto Dealer',
    quote:
      'Very good experience with Implenix. I appreciate the communication and how organized the whole deployment was.',
    recordingHref: '/case-studies/parnell-motors',
  },
  {
    businessName: 'Franklin Agency',
    ownerName: 'Franklin',
    industry: 'Marketing Agency',
    quote:
      'Our job is to grow our clients with more leads — but we were drowning in our own inbound. Implenix handles our inbound completely so the team stays on client work.',
    recordingHref: '/case-studies/franklin-agency',
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-brand-dark border-t border-brand-purple/15">
      <div className="max-w-content mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Verified results"
          title="From real businesses"
          description="Six clients, six different industries, all still deployed. Every quote links to the case study with real numbers."
        />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.businessName} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
