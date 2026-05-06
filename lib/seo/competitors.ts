// Competitor "X alternative" landing pages.
//
// These target comparison-stage buyers searching "smith.ai alternative",
// "goodcall alternative", "ruby receptionists alternative". The buyer
// has already heard of the competitor and is looking for differentiated
// options.
//
// Quality bar: every "what they do well" claim must be true. We do not
// trash competitors. We give the buyer an honest decision framework and
// explain when each option is the right answer.

type ComparisonCell = boolean | 'partial' | string;

export type CompetitorComparisonRow = {
  label: string;
  cells: ComparisonCell[]; // [Implenix, competitor]
};

export type CompetitorFaq = { question: string; answer: string };

export type CompetitorProfile = {
  slug: string; // e.g. "smith-ai"
  routeSlug: string; // URL path segment ending in -alternative, e.g. "smith-ai-alternative"
  competitorName: string; // e.g. "Smith.ai"
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  intro: string; // 250+ words, honest framing
  punchlineStat: string;
  punchlineLabel: string;
  whatTheyDoWell: string[]; // 4 honest pros
  whereWeDiffer: string[]; // 4 factual differentiators
  comparisonRows: CompetitorComparisonRow[];
  whenChooseThem: { headline: string; reasons: string[] };
  whenChooseUs: { headline: string; reasons: string[] };
  faqs: CompetitorFaq[];
};

export const COMPETITOR_PROFILES: CompetitorProfile[] = [
  {
    slug: 'smith-ai',
    routeSlug: 'smith-ai-alternative',
    competitorName: 'Smith.ai',
    metaTitle: 'Smith.ai Alternative — Implenix AI Receptionist',
    metaDescription:
      'Looking for a Smith.ai alternative? Compare Implenix vs Smith.ai on cost, coverage, integrations, and AI capability. Honest decision framework inside.',
    targetKeyword: 'smith.ai alternative',
    intro:
      "Smith.ai is one of the most established names in answering services for small business. They blend AI and human operators, run strong outbound campaigns, and integrate with most major CRMs. For businesses that want a mature, US-based human-first answering experience, they're a defensible choice. The reason buyers search for a Smith.ai alternative usually comes down to three things: pricing, AI capability, and concurrency. Smith.ai bills per call or per minute, which means cost rises directly with call volume — a service-business operator running 400+ calls a month can quickly land in the $800-$1500/mo range. Their AI Voice Assistant (the AI-only tier) is newer and less customizable than dedicated AI-first products. And because their service is human-anchored, concurrent call capacity is bounded by their staffing. Implenix is built differently. It's AI-first, not AI-augmented. Pricing is a fixed monthly fee regardless of volume, so cost stops scaling with growth. Concurrency is unbounded — a hundred simultaneous callers all get answered in under one ring. CRM integration is two-way and live, not next-morning email summaries. The trade-off is real: Smith.ai's human operators handle nuanced or emotionally complex calls in ways our AI does not — yet. The decision below comes down to whether your call profile is mostly routine high-volume work (where Implenix wins decisively) or low-volume nuanced work where human warmth is the primary value.",
    punchlineStat: '$700+',
    punchlineLabel: 'monthly difference at typical SMB volumes',
    whatTheyDoWell: [
      'Mature product with a track record going back to 2015',
      'Real human operators handle nuanced and emotionally complex calls',
      'Strong outbound campaign capability for sales-led businesses',
      'Mature integrations with HubSpot, Salesforce, Zapier, and most major CRMs',
    ],
    whereWeDiffer: [
      'Fixed monthly pricing — cost stops scaling with call volume',
      'AI-first architecture handles unlimited concurrent calls without staffing constraints',
      'True 24/7 coverage at the same fixed price (no premium for after-hours)',
      'Real-time two-way CRM and calendar sync, not delayed email handoffs',
    ],
    comparisonRows: [
      { label: 'Pricing model', cells: ['fixed monthly', 'per-call / per-minute'] },
      { label: '24/7 coverage included', cells: [true, 'partial'] },
      { label: 'Concurrent call capacity', cells: ['unlimited', 'staff-bound'] },
      { label: 'Direct calendar booking', cells: [true, 'partial'] },
      { label: 'Two-way CRM sync', cells: [true, 'partial'] },
      { label: 'Outbound campaign capability', cells: [true, true] },
      { label: 'Human operators on every call', cells: [false, true] },
      { label: 'Live transfer to human', cells: [true, true] },
      { label: 'Typical SMB monthly cost', cells: ['$297–$597', '$300–$1,500'] },
      { label: 'Time to live', cells: ['7–14 days', '24–72 hours'] },
    ],
    whenChooseThem: {
      headline: 'When Smith.ai is the right call',
      reasons: [
        'Your call profile is mostly low-volume, high-touch work where human warmth is the primary value',
        'You need outbound human-led sales campaigns at scale',
        'You want to be live in 24-48 hours and willing to pay the per-call premium for it',
        'Your team has worked with Smith.ai for years and has tuned workflows that depend on their service',
      ],
    },
    whenChooseUs: {
      headline: 'When Implenix is the right call',
      reasons: [
        'Your call volume runs above 200/month and per-call billing is now meaningful',
        'You want true 24/7 coverage without a per-hour upcharge for after-hours',
        'Concurrent peaks (storm seasons, tax season, marketing pushes) are part of your reality',
        'You want real-time CRM and calendar integration, not next-morning email summaries',
        'You expect call volume to grow and want the cost curve to stay flat',
      ],
    },
    faqs: [
      {
        question: 'How does Implenix pricing compare to Smith.ai for a typical small business?',
        answer:
          'A small business handling 200-400 calls per month typically spends $400-$900 on Smith.ai and $297-$597 on Implenix. The fixed-vs-variable difference grows with volume: at 800+ calls/month the gap widens to $700+ per month.',
      },
      {
        question: 'Does Implenix sound as natural as a Smith.ai human operator?',
        answer:
          'For routine inbound work — booking, qualification, intake, recurring requests — most callers cannot tell. For emotionally nuanced calls a great human operator still has an edge. We define live-transfer rules so sensitive calls route to your team or a backup human service.',
      },
      {
        question: 'Can I migrate from Smith.ai to Implenix without losing my workflow?',
        answer:
          'Yes. We can mirror your Smith.ai script, integrations, and routing rules during onboarding, then run both in parallel for a week before cutting over. Most migrations finish in under three weeks.',
      },
      {
        question: 'Does Implenix do outbound campaigns like Smith.ai?',
        answer:
          'Yes — see our AI Follow-up product for outbound sequences, lead nurture, appointment reminders, and re-engagement campaigns. Both inbound and outbound are covered.',
      },
      {
        question: 'What about industries where humans really matter?',
        answer:
          'For crisis lines, sensitive intake, or industries where human warmth is the primary value, a hybrid is often best: Implenix handles 80%+ of routine inbound at fixed cost, and a small live team handles the remainder via live transfer.',
      },
    ],
  },

  {
    slug: 'goodcall',
    routeSlug: 'goodcall-alternative',
    competitorName: 'Goodcall',
    metaTitle: 'Goodcall Alternative — Implenix AI Receptionist',
    metaDescription:
      'Looking for a Goodcall alternative? Compare Implenix vs Goodcall on customization, integrations, industry depth, and pricing. Honest comparison inside.',
    targetKeyword: 'goodcall alternative',
    intro:
      "Goodcall is a newer AI-first answering service with mobile-first onboarding and a free tier. For solo operators or very small businesses experimenting with AI receptionists for the first time, the entry point is appealing — you can be live in an afternoon without a discovery call. The reason buyers search for a Goodcall alternative typically falls into three buckets: they have outgrown the free tier and the paid tiers feel limited, they need deeper CRM and calendar integrations than Goodcall ships, or they're in an industry whose call profile needs more customization than the standard templates allow. Implenix and Goodcall both target the AI receptionist category, but the operating models are different. Goodcall optimizes for solo operators self-serving in minutes. Implenix optimizes for businesses where the call profile actually matters — where the script, integrations, and routing rules need to be tuned by someone who understands the industry. Where Goodcall ships a fast, opinionated default, Implenix ships a deployment process that produces a tuned production agent. The trade-off is that Implenix takes 7-14 days to go live and Goodcall takes an afternoon. For a solo operator with a simple call profile, that gap matters. For a multi-location service business with industry-specific intake, it pays for itself quickly. The pages below break down where each fits.",
    punchlineStat: 'Industry-tuned',
    punchlineLabel: 'vs templated default',
    whatTheyDoWell: [
      'Free tier and very low entry pricing — fastest cheapest way to try AI receptionist',
      'Mobile-first onboarding lets solo operators self-serve in under an hour',
      'Solid baseline experience for simple call profiles',
      'Lightweight, no-friction setup for solopreneurs',
    ],
    whereWeDiffer: [
      'Industry-specific call scripts tuned by humans, not templates filled in by users',
      'Deeper two-way CRM integrations across HubSpot, Salesforce, GoHighLevel, Zoho, and major industry tools',
      'Custom intake logic per industry — emergency triage, crisis routing, insurance pre-screen',
      'Dedicated implementation engineer during onboarding, not self-serve only',
    ],
    comparisonRows: [
      { label: 'Free tier', cells: [false, true] },
      { label: 'Time to live', cells: ['7–14 days', 'same day'] },
      { label: 'Industry-specific scripts', cells: [true, 'partial'] },
      { label: 'Two-way CRM sync depth', cells: ['deep', 'basic'] },
      { label: 'Custom transfer rules', cells: [true, 'partial'] },
      { label: 'Multi-location routing', cells: [true, false] },
      { label: 'Branded voice (custom voice cloning)', cells: ['available', false] },
      { label: 'Implementation engineer included', cells: [true, false] },
      { label: 'Typical SMB monthly cost', cells: ['$297–$597', '$0–$59'] },
      { label: 'Best fit', cells: ['established business', 'solo operator'] },
    ],
    whenChooseThem: {
      headline: 'When Goodcall is the right call',
      reasons: [
        "You're a solo operator or very small business trying AI receptionist for the first time",
        'Your call profile is simple enough that a templated default works',
        'Speed-to-live matters more than customization depth',
        'Your monthly call volume is low enough that the free or entry tier covers it',
      ],
    },
    whenChooseUs: {
      headline: 'When Implenix is the right call',
      reasons: [
        'You need an industry-specific script tuned by a human who understands your business',
        'You run multiple locations or have meaningful CRM and calendar integration requirements',
        'You want emergency triage, crisis routing, or insurance pre-screening logic specific to your field',
        'You expect to scale and want a partner who tunes the agent as you grow',
        'You prefer a defined deployment process over self-serve setup',
      ],
    },
    faqs: [
      {
        question: 'Is Implenix more expensive than Goodcall?',
        answer:
          "Yes — Goodcall has a free tier and lower-priced entry plans. Implenix starts at $297/month because every deployment includes industry tuning, integrations, and an implementation engineer. The right comparison is what each tier delivers, not the headline price.",
      },
      {
        question: 'Can I migrate from Goodcall to Implenix?',
        answer:
          'Yes. We can review your current Goodcall configuration during scoping and mirror the relevant parts. Most migrations complete in under two weeks.',
      },
      {
        question: 'What industries does Implenix support that Goodcall does not tune for?',
        answer:
          'We ship deployed playbooks across 25 industries including HVAC, dental, law firms, real estate, plumbing, med spas, auto repair, roofing, medical practices, and many more — each with industry-specific intake, transfer rules, and integrations.',
      },
      {
        question: "When does it make sense to start with Goodcall and migrate later?",
        answer:
          "If you're testing the AI receptionist category itself for the first time at very low volume, starting with a free tier elsewhere and migrating to Implenix once you outgrow it is a reasonable path. Most businesses we onboard come from either Goodcall, an answering service, or unanswered voicemail.",
      },
      {
        question: 'Can Implenix scale to multi-location operations?',
        answer:
          'Yes. Multi-location routing, account-based call handling, and per-location reporting are all supported on the Established Firm tier.',
      },
    ],
  },

  {
    slug: 'ruby-receptionists',
    routeSlug: 'ruby-receptionists-alternative',
    competitorName: 'Ruby Receptionists',
    metaTitle: 'Ruby Receptionists Alternative — Implenix AI Receptionist',
    metaDescription:
      'Looking for a Ruby Receptionists alternative? Compare Implenix vs Ruby on cost, 24/7 coverage, calendar booking, and AI capability.',
    targetKeyword: 'ruby receptionists alternative',
    intro:
      "Ruby Receptionists has been the premium human-first answering service for over two decades. They're known for warmth, brand cachet, and a strong domestic-US operator team. For high-touch professional services where the receptionist is part of the brand experience — boutique law firms, design studios, premium medical practices — Ruby has been a defensible choice. The reason buyers search for a Ruby Receptionists alternative usually comes down to math: Ruby's pricing starts around $350/month and rises sharply with volume, often crossing $1,000/month for moderate call traffic. They charge per call or per minute on most plans. Their service is human-only, so 24/7 coverage requires premium upcharges or isn't available on standard tiers. And while Ruby's operators take excellent messages, real-time calendar booking and two-way CRM sync are weaker than what AI-first products ship natively. Implenix replaces the Ruby function for the high majority of inbound work — booking, qualification, recurring service requests, after-hours coverage — at a fraction of the cost, with native calendar booking and CRM sync. Where Ruby still wins is in the moments when a caller genuinely needs human warmth: a sensitive consultation request, a high-value prospect calling outside normal qualification patterns, an existing client in distress. Many high-end professional firms now run a hybrid: Implenix handles the volume at fixed cost, and a small Ruby block (or in-house staff) handles the calls our AI flags for human handling. The decision below depends on what fraction of your calls genuinely need a human voice on the other end.",
    punchlineStat: '$600+',
    punchlineLabel: 'monthly difference at moderate volumes',
    whatTheyDoWell: [
      'Domestic-US operators with 20+ years of warm, professional brand reputation',
      'Excellent for high-touch professional services where the receptionist is part of the brand',
      'Strong message-taking and call-context summaries delivered same-day',
      'Premium polish on every call — useful for image-conscious legal, medical, and design firms',
    ],
    whereWeDiffer: [
      'Fixed monthly pricing — cost does not scale with call volume',
      '24/7 coverage included at the same fixed price',
      'Native real-time calendar booking against your actual availability',
      'Two-way CRM sync that writes back during the call, not next-morning summaries',
    ],
    comparisonRows: [
      { label: 'Pricing model', cells: ['fixed monthly', 'per-call / per-minute'] },
      { label: '24/7 coverage included', cells: [true, false] },
      { label: 'Live calendar booking', cells: [true, 'partial'] },
      { label: 'Two-way CRM sync', cells: [true, false] },
      { label: 'Concurrent call capacity', cells: ['unlimited', 'staff-bound'] },
      { label: 'Domestic-US human operators', cells: [false, true] },
      { label: 'Live transfer to human', cells: [true, true] },
      { label: 'Recordings + transcripts', cells: [true, 'partial'] },
      { label: 'Typical SMB monthly cost', cells: ['$297–$597', '$350–$1,200+'] },
      { label: 'Time to live', cells: ['7–14 days', '5–10 days'] },
    ],
    whenChooseThem: {
      headline: 'When Ruby Receptionists is the right call',
      reasons: [
        "Your business positions itself on premium human warmth and the receptionist is part of the brand",
        'Your call volume is low enough that per-call pricing stays manageable',
        'Most of your inbound calls genuinely require a human voice (high-touch consultative work)',
        'You value domestic-US human operators and consistent brand-tier polish',
      ],
    },
    whenChooseUs: {
      headline: 'When Implenix is the right call',
      reasons: [
        'Your call volume is meaningful and per-call pricing is now expensive',
        'You want true 24/7 coverage at no extra cost',
        'You need real-time calendar booking against your actual schedule',
        'You want two-way CRM sync, not next-morning email summaries',
        'Most of your inbound is qualifying-and-booking work that does not require a human voice',
        'You expect call volume to grow and want fixed cost regardless',
      ],
    },
    faqs: [
      {
        question: 'How does Implenix compare to Ruby on cost for a typical professional firm?',
        answer:
          'A solo or small professional firm running 150-300 calls per month typically spends $500-$900 on Ruby and $297-$597 on Implenix. The gap widens with volume since Ruby bills per minute or per call.',
      },
      {
        question: 'Will my callers notice the difference between Ruby and Implenix?',
        answer:
          'For routine booking, qualification, and intake calls — most callers will not notice. For emotionally complex or sensitive calls, a Ruby operator still has an edge. We define live-transfer rules so those calls route to your team.',
      },
      {
        question: 'Can I run Ruby and Implenix together?',
        answer:
          'Yes. Many firms use Implenix for the volume (booking, qualification, after-hours, recurring) and keep a smaller Ruby block (or in-house receptionist) for high-touch calls flagged by transfer rules.',
      },
      {
        question: 'Does Implenix offer real-time calendar booking that Ruby does not?',
        answer:
          "Yes. The agent reads your real availability from Google Calendar, Outlook, or Calendly during the call and books the appointment live. Ruby typically takes a message and a human team member books later.",
      },
      {
        question: "What about firms where the receptionist is genuinely part of the brand?",
        answer:
          "If your competitive positioning depends on a human voice answering, Ruby remains defensible. We work well alongside that — Implenix handles overflow, after-hours, and routine qualification while Ruby covers the brand-critical moments.",
      },
    ],
  },
];

export const COMPETITOR_SLUGS = COMPETITOR_PROFILES.map((p) => p.slug);
export const COMPETITOR_ROUTE_SLUGS = COMPETITOR_PROFILES.map((p) => p.routeSlug);

export function getCompetitorProfile(slug: string): CompetitorProfile | undefined {
  return COMPETITOR_PROFILES.find((p) => p.slug === slug);
}

export function getCompetitorByRouteSlug(
  routeSlug: string,
): CompetitorProfile | undefined {
  return COMPETITOR_PROFILES.find((p) => p.routeSlug === routeSlug);
}
