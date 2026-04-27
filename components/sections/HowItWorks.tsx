const STEPS = [
  {
    number: '01',
    title: 'AI Answers Every Call',
    body: 'Your dedicated AI agent picks up every inbound call within one ring, 24 hours a day, 7 days a week.',
  },
  {
    number: '02',
    title: 'Qualifies and Books',
    body: 'The agent follows your custom script, qualifies the lead, and books the appointment directly into your calendar.',
  },
  {
    number: '03',
    title: 'Your CRM Updates Itself',
    body: 'Every call is logged, every lead is created, every follow-up is scheduled — without you touching anything.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black">
      <div className="max-w-content mx-auto px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl text-white max-w-3xl">
          Three steps. Zero missed calls.
        </h2>

        <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-brand-cyan"
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative bg-black border border-brand-purple/20 p-8">
              <span className="font-heading text-6xl text-brand-purple block leading-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl text-white mt-6">{step.title}</h3>
              <p className="font-body text-sm text-white/70 mt-3 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
