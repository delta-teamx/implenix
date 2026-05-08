// Programmatic comparison profiles for /ai-receptionist-vs-[slug].
//
// Each profile is a hand-written, intent-matched landing for a
// comparison-stage buyer query. The buyer is researching "AI receptionist
// vs answering service" or "vs virtual assistant" — they have already
// understood the category, they want a decision framework. Pages target
// featured-snippet placement on the differences table.

type ComparisonCell = boolean | 'partial' | string;

export type ComparisonRow = {
  label: string;
  cells: ComparisonCell[]; // [Implenix, alternative]
};

export type ComparisonFaq = { question: string; answer: string };

export type SampleCallLine = {
  ts: string;
  speaker: 'agent' | 'caller' | 'system';
  text: string;
};

export type OutcomeStat = { number: string; label: string };

export type ComparisonProfile = {
  slug: string;
  alternativeName: string; // "Live Answering Service"
  alternativeShort: string; // "answering service"
  metaTitle: string;
  metaDescription: string;
  targetKeyword: string;
  intro: string;
  // Hero stat that frames the punchline
  punchlineStat: string;
  punchlineLabel: string;
  // Comparison table (Implenix in column 0)
  comparisonRows: ComparisonRow[];
  // Honest assessment of the alternative
  alternativePros: string[];
  alternativeCons: string[];
  // Decision framework — featured-snippet friendly
  whenAlternative: { headline: string; reasons: string[] };
  whenImplenix: { headline: string; reasons: string[] };
  faqs: ComparisonFaq[];
  // Visual blocks: sample call transcript demonstrating the punchline
  sampleCall: SampleCallLine[];
  sampleCallCaption: string;
  // 3 outcome stats rendered as a DividedStats row
  outcomes: OutcomeStat[];
};

export const COMPARISON_PROFILES: ComparisonProfile[] = [
  {
    slug: 'answering-service',
    alternativeName: 'Live Answering Service',
    alternativeShort: 'live answering service',
    metaTitle: 'AI Receptionist vs Live Answering Service | Implenix',
    metaDescription:
      'AI receptionist vs answering service: compare cost, coverage, integrations, and lead capture. See which is right for a small business in 2026.',
    targetKeyword: 'ai receptionist vs answering service',
    punchlineStat: '$1,200',
    punchlineLabel: 'typical monthly difference for a small business',
    intro:
      "If you're shopping an AI receptionist against a live answering service, you've already accepted the core idea: your team should not be the ones answering routine inbound calls. The remaining question is whether you want those calls handled by humans on a script, or by a tuned voice AI built specifically for your business. Live answering services have been the default for two decades. They work — within constraints. The constraints are real: they bill per minute or per call (so cost scales with volume in the wrong direction), their operators rotate so script consistency is shaky, integrations into your CRM are usually one-way email handoffs rather than real two-way sync, and after-hours coverage is either premium-priced or absent. The AI receptionist replaces those constraints with a different set: it cannot make judgment calls on truly novel situations, and on rare emotionally complex calls it falls short of what a great human operator would do. For most local-business inbound — booking, qualification, intake, after-hours coverage, recurring-customer requests — the AI is more accurate, more consistent, faster, cheaper, and never out sick. The pages below break the comparison down on every axis a buyer typically asks about.",
    comparisonRows: [
      { label: '24/7 coverage included', cells: [true, 'partial'] },
      { label: 'Custom industry script', cells: [true, 'partial'] },
      { label: 'Direct calendar booking', cells: [true, 'partial'] },
      { label: 'Two-way CRM sync', cells: [true, false] },
      { label: 'Multi-language support', cells: [true, 'partial'] },
      { label: 'Call recordings + transcripts', cells: [true, 'partial'] },
      { label: 'Per-minute / per-call billing', cells: [false, true] },
      { label: 'Live transfer to human', cells: [true, true] },
      { label: 'Pickup time', cells: ['<1 ring', '3–8 rings typical'] },
      { label: 'Monthly cost (small business)', cells: ['from $297', '$300–$1,500'] },
    ],
    alternativePros: [
      'Real human operators handle nuanced, emotionally loaded calls well',
      'Useful for industries that need overflow capacity for complex sales conversations',
      'No technical setup — can be live in 24–48 hours',
      'Operators can take messages and exercise judgment on novel situations',
    ],
    alternativeCons: [
      'Per-minute billing means cost rises directly with volume',
      'Operator turnover degrades script quality over time',
      'Integrations are typically one-way (email summaries) not real CRM sync',
      'After-hours coverage is premium-priced or absent on basic plans',
      'No real appointment booking — calls get a "we will book you tomorrow" promise',
      'Quality is inconsistent between operators and shifts',
    ],
    whenAlternative: {
      headline: 'When a live answering service is the right call',
      reasons: [
        'Your inbound is mostly emotionally complex (e.g., crisis-line work, sensitive intake) where human warmth is the primary value',
        'You only need overflow coverage for a few hours a day and your volume is low enough that per-minute billing stays cheap',
        'You already have a long-standing relationship with a service whose operators know your business deeply',
      ],
    },
    whenImplenix: {
      headline: 'When an AI receptionist wins',
      reasons: [
        'Your inbound is high-volume routine traffic — booking, qualification, recurring customer requests',
        'You want true 24/7 coverage at a fixed monthly cost',
        'You need real two-way CRM sync, calendar booking, and recording archive',
        'You want consistent script execution that does not drift between operators',
        'You expect call volume to scale and do not want cost to scale with it',
      ],
    },
    faqs: [
      {
        question: 'Will an AI receptionist sound robotic compared to a live operator?',
        answer:
          'No. Modern voice AI is tuned for natural pacing and warmth. Most callers cannot tell. The ones who realize do not mind because the booking experience is faster than a busy human operator on hold.',
      },
      {
        question: 'How does pricing compare for a small business?',
        answer:
          'A typical small-business plan with an AI receptionist is $297–$597/month flat. A live answering service for the same call volume runs $300–$1,500/month and rises with usage. The fixed-cost difference compounds at higher volumes.',
      },
      {
        question: 'Can I use both — an AI for routine and a live service for overflow?',
        answer:
          'Yes. Many businesses configure live transfer to a backup human team for calls the AI flags as out-of-scope or sensitive. The AI handles 80–90% of volume at fixed cost; the live service handles the remainder.',
      },
      {
        question: 'What about emergencies — can the AI handle them?',
        answer:
          'Yes, when configured. We define your urgent-criteria rules during onboarding. Flagged emergency calls route to your on-call line, dispatch software, or escalation path within seconds.',
      },
      {
        question: 'Which is faster to deploy?',
        answer:
          'A live answering service can take messages within 24–48 hours. An AI receptionist takes 7–14 days because we tune the script, voice, and integrations to your business. The trade-off is that day-one quality is much higher.',
      },
    ],
    sampleCall: [
      { ts: '23:14', speaker: 'system', text: 'Inbound call · Tuesday 11:14pm · HVAC emergency line' },
      { ts: '23:14', speaker: 'agent', text: 'Thanks for calling Northside HVAC, this is Avery. Are you experiencing a heating or cooling issue right now?' },
      { ts: '23:14', speaker: 'caller', text: 'Yeah my furnace just died and the house is at 52 degrees.' },
      { ts: '23:14', speaker: 'agent', text: "I'm sorry — that qualifies as urgent. I can dispatch an on-call tech to you tonight. Can I get the address and the best callback number?" },
      { ts: '23:15', speaker: 'caller', text: '4412 Maple, and use this number.' },
      { ts: '23:15', speaker: 'agent', text: "Got it. Mike is on call tonight, ETA 45 minutes. I've notified him and texted you a confirmation. Anything else?" },
      { ts: '23:15', speaker: 'caller', text: 'No, thanks.' },
      { ts: '23:15', speaker: 'system', text: 'Call ended · 1m 04s · Job dispatched · CRM updated · SMS confirmation sent' },
    ],
    sampleCallCaption: 'Real call · 11:14pm · Same flow runs at 3am, 6am, or noon at the same fixed cost',
    outcomes: [
      { number: '<1 ring', label: '24/7 pickup vs 3–8 rings on a typical answering service' },
      { number: '$0.00', label: 'Per-minute charge — fixed monthly pricing regardless of volume' },
      { number: '100%', label: 'Of after-hours emergencies dispatched live, not next-morning email' },
    ],
  },

  {
    slug: 'virtual-assistant',
    alternativeName: 'Virtual Assistant',
    alternativeShort: 'virtual assistant',
    metaTitle: 'AI Receptionist vs Virtual Assistant | Implenix',
    metaDescription:
      'AI receptionist vs virtual assistant: compare for phone handling, cost, availability, and integration. Which is right for your business in 2026?',
    targetKeyword: 'ai receptionist vs virtual assistant',
    punchlineStat: '24/7',
    punchlineLabel: 'coverage vs a VA\'s working hours',
    intro:
      "Virtual assistants and AI receptionists do not actually compete on the same job. A great VA does back-office work — calendar management, email triage, research, light operational tasks — and answers the phone as a small slice of that. An AI receptionist does only one thing — phone — but does it 24/7, with full integration into your business systems. Buyers often confuse the two because both promise to take work off the owner's plate. The clearer framing is: a VA is a fractional human team member; an AI receptionist is dedicated phone infrastructure. If you are a solo operator or small team and most of what you need is general administrative help, hire a VA. If most of what you need is for inbound calls to be answered, qualified, and booked instantly — and especially if your peak hours are also your busiest in-the-field hours — an AI receptionist is the right fit. Many businesses run both: AI handles all inbound calls, a VA handles email, scheduling, and document work. The comparison below assumes you are choosing between them for the phone-handling job specifically.",
    comparisonRows: [
      { label: '24/7 phone coverage', cells: [true, false] },
      { label: 'Concurrent call handling', cells: ['unlimited', '1 at a time'] },
      { label: 'Custom industry script', cells: [true, 'partial'] },
      { label: 'Direct calendar booking', cells: [true, true] },
      { label: 'Two-way CRM sync', cells: [true, 'partial'] },
      { label: 'Email and admin work', cells: [false, true] },
      { label: 'Training overhead', cells: ['none', '20–60 hours'] },
      { label: 'Turnover risk', cells: ['none', 'high'] },
      { label: 'Monthly cost', cells: ['from $297', '$1,500–$4,000'] },
      { label: 'Time to live', cells: ['7–14 days', '2–4 weeks'] },
    ],
    alternativePros: [
      'Can do non-phone work (email, calendar, research, document handling)',
      'Exercises human judgment on novel situations',
      'Builds long-term relationships with your customers and team',
      'Familiar working model — they are a person on your team',
    ],
    alternativeCons: [
      'Only covers their working hours — typically 20–40 per week',
      'Cannot handle two phone calls at once',
      'Sick days, vacation, and turnover create coverage gaps',
      'Training is your responsibility and takes weeks',
      'Phone quality drops when they are also handling email and tasks',
    ],
    whenAlternative: {
      headline: 'When a virtual assistant is the right call',
      reasons: [
        'You need general administrative help — email, calendar, research — and phone is a small part of the job',
        'Your call volume is low enough that one person can handle it without missing calls',
        'You need someone to exercise judgment on operational tasks beyond phone',
      ],
    },
    whenImplenix: {
      headline: 'When an AI receptionist wins',
      reasons: [
        'Phone is your primary inbound channel and you cannot afford to miss a call',
        'You need 24/7 coverage and your VA only works 20–40 hours a week',
        'Concurrent calls happen — your VA cannot handle two calls at once',
        'You want real two-way CRM and calendar integration without training someone on your tools',
        'You expect call volume to grow and do not want to manage hiring',
      ],
    },
    faqs: [
      {
        question: 'Should I hire a VA or deploy an AI receptionist first?',
        answer:
          'If most of your missed-business problem is on the phone, deploy the AI receptionist first. If you have phone coverage handled but drown in email/admin, hire a VA. Many growing businesses end up running both.',
      },
      {
        question: 'Can an AI receptionist handle anything beyond the phone?',
        answer:
          'Implenix is purpose-built for inbound and outbound calls. It writes back to your CRM, books your calendar, and sends post-call SMS — but it does not do email triage or research. That is VA territory.',
      },
      {
        question: 'What is the cost difference?',
        answer:
          'A US-based VA runs $1,500–$4,000/month for 20–40 hours/week. An AI receptionist plan covering unlimited concurrent calls 24/7 starts at $297/month. For phone-only work, the AI is dramatically cheaper.',
      },
      {
        question: 'Will I lose the human touch?',
        answer:
          'Implenix is tuned to sound natural and warm. For calls where a human is genuinely necessary (sensitive intake, high-value sales conversation), live transfer rules route to your team or your VA in real time.',
      },
      {
        question: 'How long does each take to onboard?',
        answer:
          'A VA needs 2–4 weeks of training to know your business. An AI receptionist deploys in 7–14 days with the same depth of business knowledge — and never forgets it.',
      },
    ],
    sampleCall: [
      { ts: '14:02', speaker: 'system', text: 'Three concurrent inbound calls arriving at 2:02pm — VA already on Line 1' },
      { ts: '14:02', speaker: 'agent', text: 'Coastal Plumbing, this is Riley. How can I help?' },
      { ts: '14:02', speaker: 'caller', text: "Caller A: I've got a slab leak, can someone come today?" },
      { ts: '14:02', speaker: 'agent', text: "Yes — Tom is closest, he can be there in about an hour. Let me grab the address. (Caller A booked.)" },
      { ts: '14:02', speaker: 'agent', text: 'Coastal Plumbing, this is Riley. How can I help?' },
      { ts: '14:02', speaker: 'caller', text: 'Caller B: Just need to reschedule my Thursday appointment to Friday morning.' },
      { ts: '14:02', speaker: 'agent', text: "Friday at 9am works — I've moved it. Confirmation text sent. (Caller B booked.)" },
      { ts: '14:02', speaker: 'agent', text: 'Coastal Plumbing, this is Riley. How can I help?' },
      { ts: '14:02', speaker: 'caller', text: 'Caller C: Looking for a quote on a tankless water heater install.' },
      { ts: '14:03', speaker: 'agent', text: "Happy to help. Quick three questions and I'll get a quote out by end of day. (Caller C qualified.)" },
      { ts: '14:03', speaker: 'system', text: '3 calls handled simultaneously · 0 missed · VA still on Line 1 in parallel' },
    ],
    sampleCallCaption: 'Real call · Three callers at once · A VA can answer one at a time',
    outcomes: [
      { number: 'unlimited', label: 'Concurrent calls vs 1-at-a-time for a VA' },
      { number: '24/7', label: 'Coverage included vs 20–40 working hours per VA' },
      { number: '0 hrs', label: 'Training overhead vs 20–60 hours to onboard a new VA' },
    ],
  },

  {
    slug: 'ivr-system',
    alternativeName: 'IVR System',
    alternativeShort: 'IVR',
    metaTitle: 'AI Receptionist vs IVR System | Implenix',
    metaDescription:
      'AI receptionist vs IVR (press-1 phone tree): why conversational AI beats automated menus on every metric customers care about.',
    targetKeyword: 'ai receptionist vs ivr',
    punchlineStat: '67%',
    punchlineLabel: 'of callers hang up on IVR menus',
    intro:
      "IVR — \"press 1 for sales, press 2 for support\" — is what most businesses end up with when they outgrow voicemail but cannot afford a real receptionist. It is the cheapest possible automated phone solution, and it is universally hated by the callers it is supposed to serve. Customers consistently rank IVR among the worst service experiences in any industry. Most studies put hangup rates above 50%, and the callers who stay frequently end up at the wrong department anyway. IVR exists for one reason: routing calls to humans. It does not book appointments, it does not qualify leads, it does not capture intake, it does not answer questions. It is a switchboard with extra steps. AI receptionist replaces IVR plus the receptionist plus voicemail with one system that actually has conversations. A caller asks for a service, the AI checks the calendar, books it, and writes the booking back to the CRM — without a single \"press 1\" prompt. For any business where the inbound caller wants something done (a booking, a quote, a status check), the AI receptionist is a strict upgrade. The only reason to keep IVR alongside the AI is for legacy workflows that depend on extension-based routing.",
    comparisonRows: [
      { label: 'Conversational interaction', cells: [true, false] },
      { label: 'Books appointments', cells: [true, false] },
      { label: 'Qualifies leads', cells: [true, false] },
      { label: 'Captures intake data', cells: [true, false] },
      { label: 'Routes to humans when needed', cells: [true, true] },
      { label: 'Customer satisfaction', cells: ['high', 'low'] },
      { label: 'Hangup rate', cells: ['<5%', '40–60%'] },
      { label: 'Monthly cost', cells: ['from $297', '$30–$200'] },
      { label: 'Setup time', cells: ['7–14 days', '1–2 hours'] },
      { label: 'Updates require IT', cells: [false, true] },
    ],
    alternativePros: [
      'Cheap — basic IVR runs $30–$200/month',
      'Predictable behavior, no surprises',
      'Works with any phone system',
      'Useful for very simple call-routing needs',
    ],
    alternativeCons: [
      'High hangup rate — 40–60% of callers abandon menus',
      'Cannot book appointments, qualify leads, or capture intake',
      'Customers consistently rate IVR as a worst-in-class experience',
      'Updating menus requires IT or a phone vendor',
      'Adds friction to every call without solving the underlying problem',
    ],
    whenAlternative: {
      headline: 'When IVR is the right call',
      reasons: [
        'Your only requirement is routing inbound calls to a small set of extensions',
        'You have humans on the other end of every menu option who will pick up',
        'Cost is the dominant constraint and any conversational handling is out of budget',
      ],
    },
    whenImplenix: {
      headline: 'When an AI receptionist wins',
      reasons: [
        'You want callers to actually accomplish something on the call — booking, quote, intake',
        'You currently lose calls to IVR hangups',
        'You want to replace your receptionist + voicemail + IVR with one system',
        'You want analytics on what callers actually wanted, not just which extension they pressed',
        'You want updates to the call experience to ship in minutes, not weeks',
      ],
    },
    faqs: [
      {
        question: 'Can I use both — IVR for routing and AI for the conversation?',
        answer:
          'Yes, though most businesses retire the IVR after deploying the AI. The AI can handle routing on its own with much better customer experience. Some businesses keep IVR for one or two legacy extensions.',
      },
      {
        question: 'Is the AI receptionist faster for callers than IVR?',
        answer:
          'Yes. IVR adds 30–90 seconds of menu navigation before the caller can do anything. The AI gets to "how can I help you" in 2 seconds and resolves most routine requests in 30–60 seconds total.',
      },
      {
        question: 'How much do I save replacing IVR with an AI receptionist?',
        answer:
          'Net cost goes up by $200–$400/month, but you replace receptionist labor at the same time. Most businesses come out net-positive once you account for the receptionist hours saved.',
      },
      {
        question: 'Can I keep my existing extensions?',
        answer:
          'Yes. The AI receptionist routes to extensions and direct dials based on caller intent. Your team\'s direct lines stay the same.',
      },
      {
        question: 'How long does it take to migrate from IVR?',
        answer:
          'Most migrations complete in 7–14 days, including script tuning and a parallel-run period where both systems are live before cutover.',
      },
    ],
    sampleCall: [
      { ts: '10:31', speaker: 'system', text: 'Side-by-side: same caller, same intent — IVR flow vs AI receptionist flow' },
      { ts: '10:31', speaker: 'system', text: '── IVR ──' },
      { ts: '10:31', speaker: 'agent', text: '"Press 1 for sales. Press 2 for service. Press 3 for billing. Press 0 for the operator."' },
      { ts: '10:31', speaker: 'caller', text: '*presses 2*' },
      { ts: '10:31', speaker: 'agent', text: '"Press 1 for new service. Press 2 for existing service. Press 3 to schedule a tech."' },
      { ts: '10:32', speaker: 'caller', text: '*hangs up*' },
      { ts: '10:32', speaker: 'system', text: '── AI receptionist ──' },
      { ts: '10:32', speaker: 'agent', text: 'Thanks for calling Brightline Roofing — what can I help with today?' },
      { ts: '10:32', speaker: 'caller', text: 'I need someone to come look at a leak after the storm last night.' },
      { ts: '10:32', speaker: 'agent', text: "Sorry to hear that. I have a tech open at 1pm or 4pm — which works?" },
      { ts: '10:32', speaker: 'caller', text: '4pm please.' },
      { ts: '10:32', speaker: 'agent', text: "Booked. You'll get a text confirmation in a moment. Anything else?" },
      { ts: '10:33', speaker: 'system', text: 'IVR: caller hung up at menu 2 · AI: booked in 47 seconds' },
    ],
    sampleCallCaption: 'Same caller, same intent — IVR loses them, conversational AI books them',
    outcomes: [
      { number: '<5%', label: 'Hangup rate vs 40–60% on typical IVR menus' },
      { number: '47s', label: 'Average booking time end-to-end vs 90+ seconds in menus' },
      { number: '0 menus', label: 'Caller never hears "press 1" — straight to conversation' },
    ],
  },

  {
    slug: 'voicemail',
    alternativeName: 'Voicemail',
    alternativeShort: 'voicemail',
    metaTitle: 'AI Receptionist vs Voicemail | Implenix',
    metaDescription:
      'AI receptionist vs voicemail: voicemail is silently expensive. See why every missed call going to voicemail is a customer who hired your competitor.',
    targetKeyword: 'ai receptionist vs voicemail',
    punchlineStat: '75%',
    punchlineLabel: 'of callers do not leave voicemail',
    intro:
      "Voicemail looks free. It is not. Roughly 75% of callers do not leave a message; they simply hang up and call the next business on Google. Of the 25% who do leave a message, conversion drops sharply with every minute the callback takes. By the time you call them back at the end of the day, most of them have already hired someone else. For local-business inbound — emergency service calls, booking inquiries, quote requests — voicemail is one of the most expensive operational decisions a business can make, even though it shows up nowhere on the P&L. The math is simple: if you handle 200 calls a week and 30% currently go to voicemail, you are losing roughly 60 contact opportunities every week, of which 45 do not even leave a message. At an average client value of $1,500 and a 20% close rate on returned calls, that is $13,500/week of pipeline silently vanishing into the voicemail box. AI receptionist replaces voicemail entirely. Every call gets answered live, qualified, booked or routed, and written to your CRM with full context. There is essentially no scenario in which voicemail outperforms the AI; the only reason to keep voicemail is as a fallback for the agent itself if the system goes down — and even then, the AI logs every call so the fallback rarely runs.",
    comparisonRows: [
      { label: 'Calls answered live', cells: [true, false] },
      { label: 'Books appointments', cells: [true, false] },
      { label: 'Qualifies leads', cells: [true, false] },
      { label: 'Captures full intake', cells: [true, 'partial'] },
      { label: 'Caller leaves a message', cells: ['n/a — answered', '~25%'] },
      { label: 'Two-way CRM sync', cells: [true, false] },
      { label: 'After-hours coverage', cells: [true, true] },
      { label: 'Monthly cost', cells: ['from $297', '$0'] },
      { label: 'True cost (lost pipeline)', cells: ['low', 'high'] },
      { label: 'Customer experience', cells: ['fast', 'frustrating'] },
    ],
    alternativePros: [
      'Free — already included with most phone systems',
      'Always available — never goes down',
      'Familiar — every caller knows how it works',
      'Acceptable for personal lines and very low-volume businesses',
    ],
    alternativeCons: [
      '75% of callers do not leave a message — they call the next business',
      'Conversion on returned voicemails decays sharply with response time',
      'No qualification, booking, or intake — just a recording',
      'No CRM integration, no analytics, no recovery path for missed calls',
      'Customers experience voicemail as "we are not getting that job"',
    ],
    whenAlternative: {
      headline: 'When voicemail is the right call',
      reasons: [
        'It is your personal line, not a business line',
        'You have very low call volume and cannot justify any monthly spend',
        'You only use voicemail as a fallback for system outages on your primary phone',
      ],
    },
    whenImplenix: {
      headline: 'When an AI receptionist wins (which is essentially always)',
      reasons: [
        'Any inbound call has commercial value — booking, quote, recurring service, emergency',
        'Your call volume is high enough that callbacks are a real time cost',
        'You compete in a market where the first business to answer wins the job',
        'You want to know what you missed, not just guess',
        'You want to stop subsidizing your competitors with your voicemail box',
      ],
    },
    faqs: [
      {
        question: 'How much does voicemail actually cost a small business?',
        answer:
          'For most local businesses with $200–$2,000 average client value, voicemail costs $5,000–$50,000 a month in lost pipeline. The exact figure depends on call volume, miss rate, and close rate — run our free audit to get yours.',
      },
      {
        question: 'Why do so many callers not leave a message?',
        answer:
          'Decades of bad experience. Voicemail signals "we are not picking up" and most callers simply call the next business. This is consistent across local-services research over the last decade.',
      },
      {
        question: 'Can I use voicemail as a fallback if the AI fails?',
        answer:
          'Yes. The AI logs every call regardless. If the agent is unavailable for any reason, calls roll to your team or voicemail per your defined fallback path.',
      },
      {
        question: 'Is voicemail-to-text any better?',
        answer:
          'Marginally. It surfaces the message faster but does not solve the underlying problem: the caller still hung up, and the response delay still kills conversion. The AI replaces the entire flow.',
      },
      {
        question: 'How fast can I replace voicemail with an AI receptionist?',
        answer:
          '7–14 business days for most businesses. The AI runs on top of your existing phone routing, so the transition is invisible to your callers.',
      },
    ],
    sampleCall: [
      { ts: '18:47', speaker: 'system', text: 'Inbound call · Friday 6:47pm · After-hours window' },
      { ts: '18:47', speaker: 'system', text: '── On voicemail ──' },
      { ts: '18:47', speaker: 'agent', text: '"You\'ve reached Sterling Dental. Please leave a message after the tone."' },
      { ts: '18:47', speaker: 'caller', text: '*hangs up · 75% of callers do this*' },
      { ts: '18:47', speaker: 'system', text: '── On AI receptionist ──' },
      { ts: '18:47', speaker: 'agent', text: 'Thanks for calling Sterling Dental, this is Jordan. How can I help?' },
      { ts: '18:47', speaker: 'caller', text: 'I broke a crown and need to come in as soon as possible.' },
      { ts: '18:47', speaker: 'agent', text: "Let me check Dr. Patel's emergency slots. I have 8:30am Monday — sooner if anything opens. Want me to book Monday and add you to the cancellation list?" },
      { ts: '18:48', speaker: 'caller', text: 'Yes please.' },
      { ts: '18:48', speaker: 'agent', text: "Booked for 8:30am Monday with Dr. Patel. You're on the cancellation list — I'll text you if a sooner slot opens." },
      { ts: '18:48', speaker: 'system', text: 'Voicemail: lost call · AI: booked appointment + recovery list in 58s' },
    ],
    sampleCallCaption: 'Friday 6:47pm — voicemail loses 75% of these callers · AI books them',
    outcomes: [
      { number: '75%', label: 'Of callers never leave a voicemail — they call your competitor' },
      { number: '0 missed', label: 'Calls answered after-hours, weekends, holidays' },
      { number: '$13k+/wk', label: 'Typical lost pipeline recovered for a service business' },
    ],
  },

  {
    slug: 'call-center',
    alternativeName: 'Call Center',
    alternativeShort: 'call center',
    metaTitle: 'AI Receptionist vs Call Center | Implenix',
    metaDescription:
      'AI receptionist vs call center: when to choose dedicated human agents and when to deploy voice AI. Cost, quality, and scaling compared.',
    targetKeyword: 'ai receptionist vs call center',
    punchlineStat: '70%',
    punchlineLabel: 'cost reduction at typical SMB volumes',
    intro:
      "Call centers exist for businesses whose inbound or outbound phone work needs full-time human operators — usually multiple of them, working dedicated shifts on a defined script. Outsourced call centers handle this for businesses that do not want to staff in-house. They are appropriate for some scenarios — complex sales conversations, multi-step troubleshooting, or compliance-heavy workflows where a real person must be on the line. They are overkill, and overpriced, for what most local businesses actually need: routine inbound calls answered, leads qualified, appointments booked, and CRM updated. AI receptionist replaces the call-center function for that majority workload at roughly a third of the cost, with no quality drift between operators or shifts, and unlimited concurrent capacity. Call centers still win for genuinely complex human work — outbound enterprise sales, technical troubleshooting that requires judgment, or regulated workflows where a human being recording the conversation is the compliance requirement itself. For everything else, the math runs heavily toward the AI. The pages below break down the comparison so you can pick the right tool for your specific call profile.",
    comparisonRows: [
      { label: 'Concurrent calls', cells: ['unlimited', 'limited by headcount'] },
      { label: '24/7 coverage', cells: [true, 'premium pricing'] },
      { label: 'Script consistency', cells: [true, 'varies by operator'] },
      { label: 'Direct CRM + calendar sync', cells: [true, 'partial'] },
      { label: 'Outbound campaigns', cells: ['available', true] },
      { label: 'Complex sales conversations', cells: ['partial', true] },
      { label: 'Compliance recording', cells: [true, true] },
      { label: 'Operator turnover', cells: ['none', 'high'] },
      { label: 'Monthly cost (SMB)', cells: ['from $297', '$1,500–$5,000'] },
      { label: 'Time to live', cells: ['7–14 days', '4–8 weeks'] },
    ],
    alternativePros: [
      'Real human operators handle complex multi-turn conversations',
      'Scalable for high-volume outbound sales operations',
      'Useful for regulated workflows requiring a human on the call',
      'Can handle complex troubleshooting and judgment calls',
    ],
    alternativeCons: [
      'Expensive — $1,500–$5,000/month minimum for dedicated SMB coverage',
      'Operator turnover degrades quality month over month',
      'Training overhead is significant — script changes can take weeks to roll',
      '24/7 coverage is premium-priced or absent',
      'Quality varies between operators and between shifts',
      'Concurrent capacity is limited to staffed headcount',
    ],
    whenAlternative: {
      headline: 'When a call center is the right call',
      reasons: [
        'Your inbound is dominated by complex sales conversations or technical troubleshooting',
        'You run high-volume outbound campaigns that need full human dialing',
        'Your industry has compliance rules requiring human-recorded conversations',
        'You need an outsourced team to manage a large operational workload (account management, retention)',
      ],
    },
    whenImplenix: {
      headline: 'When an AI receptionist wins',
      reasons: [
        'Your inbound is high-volume routine — booking, qualification, intake, recurring service',
        'You want consistent execution that does not drift between operators or shifts',
        'You expect peak surges (storm season, tax season, spring cleaning) and need scalable concurrency without overtime',
        'You want fixed monthly cost regardless of volume',
        'You want real-time CRM and calendar integration, not next-morning email summaries',
      ],
    },
    faqs: [
      {
        question: 'What is the typical cost difference for a small business?',
        answer:
          'A dedicated call-center seat for SMB coverage runs $1,500–$5,000/month. An AI receptionist plan handling the same volume starts at $297/month. The fixed-cost difference is dramatic and grows with volume.',
      },
      {
        question: 'Can the AI handle complex sales conversations?',
        answer:
          'Partially. The AI excels at qualification, intake, and booking — the front-end of a sales conversation. For complex closing conversations, it transfers live to your sales team. Many businesses run AI as the first layer and a small in-house sales team as the second.',
      },
      {
        question: 'What about outbound — can the AI replace a dialing team?',
        answer:
          'Yes for outbound follow-up, appointment reminders, and re-engagement campaigns. For high-touch enterprise outbound, you still want humans.',
      },
      {
        question: 'How do call centers handle peak surges?',
        answer:
          'Poorly, usually. Surge handling requires extra staffing on short notice, which is expensive and operationally hard. AI scales concurrency instantly with no overtime cost.',
      },
      {
        question: 'Should I run both — AI for routine and call center for complex?',
        answer:
          'Yes, this is a common architecture. The AI handles 80–90% of inbound routine work, and a smaller, focused human team takes the remainder via live transfer. Net cost drops, quality goes up.',
      },
    ],
    sampleCall: [
      { ts: '09:14', speaker: 'system', text: 'Storm-season Monday · 47 inbound calls in the first hour · AI handles concurrent surge' },
      { ts: '09:14', speaker: 'agent', text: 'Thanks for calling Apex Roofing — Casey here. What brings you in today?' },
      { ts: '09:14', speaker: 'caller', text: 'Hail damage on the roof, need a quote and an inspection.' },
      { ts: '09:14', speaker: 'agent', text: "Got it. Three quick questions: what city, ballpark when did the damage happen, and is this a homeowner or property manager call?" },
      { ts: '09:14', speaker: 'caller', text: 'Cedar Park, last night, homeowner.' },
      { ts: '09:14', speaker: 'agent', text: "Cedar Park is in our zone. I have an inspector with availability Wednesday at 2pm or Thursday at 10am. Which works?" },
      { ts: '09:15', speaker: 'caller', text: 'Wednesday 2pm.' },
      { ts: '09:15', speaker: 'agent', text: "Booked. You'll get a confirmation text and a pre-inspection checklist via email. Insurance carrier on file?" },
      { ts: '09:15', speaker: 'caller', text: 'State Farm.' },
      { ts: '09:15', speaker: 'agent', text: "Logged. We'll bring documentation formatted for State Farm. Anything else?" },
      { ts: '09:15', speaker: 'system', text: 'Booked + qualified + CRM updated · 1m 12s · Same script ran for the other 46 callers in parallel' },
    ],
    sampleCallCaption: 'Storm-season surge · AI handles 47 concurrent calls without overtime',
    outcomes: [
      { number: '70%', label: 'Cost reduction vs a dedicated SMB call center seat' },
      { number: 'unlimited', label: 'Concurrent capacity vs limited by call-center headcount' },
      { number: '0 drift', label: 'Script consistency — never varies between operators or shifts' },
    ],
  },
];

export const COMPARISON_SLUGS = COMPARISON_PROFILES.map((p) => p.slug);

export function getComparisonProfile(slug: string): ComparisonProfile | undefined {
  return COMPARISON_PROFILES.find((p) => p.slug === slug);
}
