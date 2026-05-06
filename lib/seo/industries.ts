// Programmatic industry profiles for /ai-receptionist-for-[slug].
//
// One profile per industry. Each is hand-written and unique — Google
// flags templated doorway pages, so every intro / pain point / FAQ
// here describes the real shape of that industry's call traffic.
//
// The 8 industries that have rich MDX content (hvac-companies, dentists,
// real-estate, law-firms, plumbers, med-spas, auto-repair, roofers) are
// NOT included here — the page route renders those from MDX.

export type ProfilePainPoint = { title: string; description: string };
export type ProfileUseCase = { title: string; description: string };
export type ProfileStat = { number: string; label: string };
export type ProfileFaq = { question: string; answer: string };

export type IndustryProfile = {
  slug: string;
  name: string; // plural display name
  nicheSingular: string; // singular noun for sentence use
  metaTitle: string; // ≤ 60 chars
  metaDescription: string; // ≤ 155 chars
  targetKeyword: string;
  relatedKeywords: string[];
  intro: string; // 200+ words unique
  heroStat: string;
  heroStatLabel: string;
  avgWeeklyCalls: number;
  avgClientValue: number;
  painPoints: ProfilePainPoint[]; // 3
  useCases: ProfileUseCase[]; // 3
  stats: ProfileStat[]; // 3
  testimonialQuote: string;
  testimonialAuthor: string;
  faqs: ProfileFaq[]; // 5
  caseStudySlug: string;
  related: string[]; // industry slugs
};

export const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    slug: 'medical-practices',
    name: 'Medical Practices',
    nicheSingular: 'medical practice',
    metaTitle: 'AI Receptionist for Medical Practices | Implenix',
    metaDescription:
      'AI receptionist for medical practices. Book new patients, handle insurance questions, route refill requests, and stop losing intake calls to voicemail.',
    targetKeyword: 'ai receptionist for medical practices',
    relatedKeywords: [
      'medical office answering service',
      'patient intake automation',
      'medical practice phone ai',
      'hipaa ai receptionist',
    ],
    intro:
      "Medical practices live and die by the front desk. New-patient intake calls land while staff is checking in the patient already standing at the counter. Insurance verification calls eat hours. Refill requests pile up on hold. The result is the same every time: high-intent callers hit voicemail, then call the practice down the street that picked up. Implenix takes that pressure off. The AI receptionist for medical practices answers every inbound call within one ring, runs your intake script, verifies insurance against the questions you define, and books the appointment directly into your PMS. It distinguishes between a new patient request, a refill question, an insurance issue, and a true clinical concern — and routes each one according to rules your team approves. Refills go to the queue your nurse already monitors. Clinical questions transfer live. Cold solicitations get screened. Everything else gets booked. After every call, the contact is updated, the recording is archived, and the next-step notification goes out. Practices that switch see new-patient capture rates jump from the typical 45-55% to above 90% inside the first month. Front desk staff stop drowning. Providers stop walking out at 6 PM to a stack of voicemail. And the practice stops losing six-figure pipeline to a phone system that wasn't designed for the volume.",
    heroStat: '+38%',
    heroStatLabel: 'new-patient bookings in 30 days',
    avgWeeklyCalls: 280,
    avgClientValue: 1400,
    painPoints: [
      {
        title: 'New-patient intake collides with in-office check-ins',
        description:
          'PLACEHOLDER — When the front desk is checking in a patient, every other caller hits voicemail. New-patient acquisition cost is wasted on a call that never gets answered.',
      },
      {
        title: 'Insurance verification eats half the day',
        description:
          'PLACEHOLDER — Insurance is the most-asked question and the most repetitive. Staff spends real labor hours on calls that follow a script.',
      },
      {
        title: 'Refill requests pile up on hold',
        description:
          'PLACEHOLDER — Refill calls feel non-urgent to staff but urgent to patients. Without a clean queue, both sides get frustrated and the patient relationship degrades.',
      },
    ],
    useCases: [
      {
        title: 'New-patient intake with insurance pre-screen',
        description:
          'Captures demographic, insurance carrier, member ID, chief complaint. Books only if your accepted-payer rules pass.',
      },
      {
        title: 'Refill request triage routed to your nurse queue',
        description:
          'Logs medication, prescriber, pharmacy, and patient ID directly into your PMS as a refill task — no transcription needed.',
      },
      {
        title: 'After-hours clinical escalation',
        description:
          'Callers who describe symptoms matching your urgent-criteria list are transferred to your on-call nurse line in real time.',
      },
    ],
    stats: [
      { number: '+38%', label: 'new-patient bookings' },
      { number: '<60s', label: 'average pickup time' },
      { number: '-42%', label: 'voicemail abandonment' },
    ],
    testimonialQuote:
      'PLACEHOLDER — Our front desk used to answer 6 out of every 10 calls. Now we answer all of them, and our front desk has the bandwidth to actually look up at patients walking in.',
    testimonialAuthor: 'PLACEHOLDER — Practice administrator, primary care group',
    faqs: [
      {
        question: 'Is the Implenix AI receptionist HIPAA compliant?',
        answer:
          'Yes. We sign a BAA, encrypt PHI in transit and at rest, restrict access by role, and follow HIPAA minimum-necessary principles. Audit logs are available on request.',
      },
      {
        question: 'Does it integrate with our practice management system?',
        answer:
          'Most major PMS platforms integrate via direct API or a webhook bridge. Confirm during scoping — we have shipped integrations with Athenahealth, Epic, eClinicalWorks, NextGen, and others.',
      },
      {
        question: 'Can it handle prescription refill questions?',
        answer:
          'Yes. The agent captures the medication name, prescriber, pharmacy, and patient ID, then writes the refill task into your PMS or a defined queue. It does not provide clinical advice.',
      },
      {
        question: 'How does it handle insurance verification?',
        answer:
          'It collects carrier, member ID, group number, and the patient\'s reason for visit, then either books or screens out callers based on your accepted-payer rules.',
      },
      {
        question: 'Will patients know they are talking to an AI?',
        answer:
          'We disclose where required by jurisdiction. The voice is natural and warm. Most patients do not realize, and the ones who do find the booking experience faster than a busy front desk.',
      },
    ],
    caseStudySlug: 'placeholder-dental',
    related: ['dentists', 'chiropractors', 'veterinarians'],
  },

  {
    slug: 'electricians',
    name: 'Electricians',
    nicheSingular: 'electrical contractor',
    metaTitle: 'AI Receptionist for Electricians | Implenix',
    metaDescription:
      'AI receptionist for electricians. Capture every emergency outage call, qualify the job, and dispatch the right tech — 24/7. Built for residential and commercial.',
    targetKeyword: 'ai receptionist for electricians',
    relatedKeywords: [
      'electrician answering service',
      'electrical contractor dispatch ai',
      'electrician call automation',
      '24/7 electrician answering',
    ],
    intro:
      "Electricians lose money to two things they cannot control with their hands full: power-out calls at 2 AM and estimate calls during the workday. Both share the same problem — the phone rings while everyone capable of answering is on a roof, in a panel, or driving between sites. Voicemail is an instant lost job for a panel replacement, a generator install, or an emergency outage. Implenix is the AI receptionist for electricians: it picks up inside one ring, triages residential vs commercial, sorts emergencies from estimate requests, and books the right tech to the right window — all written back to your dispatch software before the next call comes in. The agent runs the intake script your team would run if they had time: address, age of panel, scope of work, urgency, accepted payment. For storm-driven outage spikes, it scales without overtime. For routine bid calls, it captures specs in detail your tech can actually act on. And for the calls that should reach a human — a long-time commercial client, a complex bid over a threshold, or a frustrated caller — it transfers live within seconds. Electricians who deploy Implenix typically see emergency-call capture climb from the low 40s to above 90 percent within the first month, and crews report fewer on-site surprises because intake quality is consistent across every call.",
    heroStat: '+92%',
    heroStatLabel: 'after-hours emergency capture rate',
    avgWeeklyCalls: 165,
    avgClientValue: 850,
    painPoints: [
      {
        title: 'Outage calls happen when no one can answer',
        description:
          'PLACEHOLDER — A blown panel at 9 PM is a $1,500-$5,000 job. If voicemail picks up, the customer calls the next number on the list and that job is gone for good.',
      },
      {
        title: 'Estimates get scoped poorly over rushed phone calls',
        description:
          'PLACEHOLDER — A rushed two-minute call captures half the information. The tech shows up to a different scope, the customer is annoyed, and the close rate drops.',
      },
      {
        title: 'Commercial vs residential routing is ad hoc',
        description:
          'PLACEHOLDER — Most shops route every call to the same dispatcher. Commercial accounts with SLAs sit in the same queue as residential bid calls.',
      },
    ],
    useCases: [
      {
        title: 'Triage emergency outage with code-flag rules',
        description:
          'Callers describing burning smells, sparking, or no-power emergencies route to dispatch immediately. Routine fixes get booked into the next available window.',
      },
      {
        title: 'Capture estimate scope your tech can actually use',
        description:
          'Panel age, square footage, EV charger or generator scope, permit history. The data writes back to your CRM with photos collected via SMS.',
      },
      {
        title: 'Live transfer for commercial accounts and VIPs',
        description:
          'A defined allow-list routes long-term clients and accounts on contract straight to your account manager — no script, no hold.',
      },
    ],
    stats: [
      { number: '+92%', label: 'after-hours capture rate' },
      { number: '<45s', label: 'average pickup time' },
      { number: '+27%', label: 'estimate close rate' },
    ],
    testimonialQuote:
      'PLACEHOLDER — Storm season used to mean missing 30 calls a week. Last quarter we missed two. The agent dispatched the rest before I picked up the truck.',
    testimonialAuthor: 'PLACEHOLDER — Owner, regional electrical contractor',
    faqs: [
      {
        question: 'Does it integrate with ServiceTitan, Housecall Pro, Jobber?',
        answer:
          'Yes. We support direct integrations and webhooks for the major dispatch platforms. Job records, contact updates, and tech notifications flow back automatically.',
      },
      {
        question: 'Can it handle commercial accounts with SLAs separately?',
        answer:
          'Yes. Account-based routing keeps commercial and residential queues distinct. Contracted accounts get priority handling and live transfer to the right account manager.',
      },
      {
        question: 'Will the agent quote pricing?',
        answer:
          'Within ranges your team approves — typical service-call ranges and panel-replacement ballparks. Final quotes always go to a human after the on-site assessment.',
      },
      {
        question: 'How does it handle outage emergencies?',
        answer:
          'Callers describing burning, sparks, or full outages are flagged urgent and dispatched immediately. The agent collects address, panel access, and pet/animal info before the tech rolls.',
      },
      {
        question: 'How fast can we deploy?',
        answer:
          '7 to 14 business days for most shops. We can compress for storm-season prep.',
      },
    ],
    caseStudySlug: 'placeholder-hvac',
    related: ['plumbers', 'hvac-companies', 'contractors'],
  },

  {
    slug: 'contractors',
    name: 'General Contractors',
    nicheSingular: 'general contractor',
    metaTitle: 'AI Receptionist for Contractors | Implenix',
    metaDescription:
      'AI receptionist for general contractors. Qualify project leads, route subs, and stop losing six-figure bids to voicemail. Built for residential and commercial GCs.',
    targetKeyword: 'ai receptionist for contractors',
    relatedKeywords: [
      'general contractor answering service',
      'construction call automation',
      'contractor lead qualification ai',
      'contractor receptionist',
    ],
    intro:
      "A general contractor's pipeline is built from phone calls that arrive at the worst possible time — mid-pour, on a ladder, in a meeting with a sub. Every missed call is a project bid that walks across the street to the GC who picked up. Implenix is the AI receptionist for contractors: it answers every inbound call inside one ring, qualifies the lead by project type, scope, budget range, and timeline, and books the site visit directly into your calendar. The questions match what you would ask if you had time — square footage, design status, permit posture, financing readiness, decision-makers involved. Real estate agents and homeowners get a different intake than commercial property managers. Sub coordination calls, change-order questions, and inspector follow-ups route to the people who can actually answer. The agent screens out tire-kickers (no permit, no decision-maker, no realistic budget) so your project manager only sees calls worth a site visit. After every call, the lead lands in your CRM with full context, photos collected via SMS, and a follow-up scheduled. Contractors deploying Implenix tend to see qualified site-visit volume rise 40-60% in the first quarter while their PMs report fewer wasted truck rolls because the intake quality stays consistent across every call.",
    heroStat: '+54%',
    heroStatLabel: 'qualified site visits booked per quarter',
    avgWeeklyCalls: 95,
    avgClientValue: 18500,
    painPoints: [
      {
        title: 'Bid calls hit voicemail when crews are on site',
        description:
          'PLACEHOLDER — Six-figure remodel inquiries die on voicemail because the owner is in a wall pocket. The next contractor on Google answers and wins the job.',
      },
      {
        title: 'Tire-kickers waste truck-roll budget',
        description:
          'PLACEHOLDER — Every site visit costs real time and gas. Without intake screening, half end up with no permits, no budget, no decision-makers.',
      },
      {
        title: 'Sub coordination calls collide with sales calls',
        description:
          'PLACEHOLDER — Sub schedules, change orders, and inspector calls drown out new-bid calls in the same queue. Sales suffers because operations is loud.',
      },
    ],
    useCases: [
      {
        title: 'Project intake with permit + financing pre-screen',
        description:
          'Captures scope, square footage, permit posture, financing status, decision-makers. Site visits only get booked when your minimum-bar rules pass.',
      },
      {
        title: 'Sub and inspector calls routed to operations',
        description:
          'Defined transfer rules pull sub and inspector calls out of the new-business queue and into the right ops channel.',
      },
      {
        title: 'Photo collection via SMS during the intake call',
        description:
          'Mid-call, the agent texts a link the homeowner can use to send job photos. Files attach to the CRM lead before your PM sees it.',
      },
    ],
    stats: [
      { number: '+54%', label: 'qualified site visits' },
      { number: '-31%', label: 'wasted truck rolls' },
      { number: '<60s', label: 'average pickup time' },
    ],
    testimonialQuote:
      'PLACEHOLDER — We used to send our PM on six site visits a week. Now five of those six actually have a budget and a permit, and the sixth just gets a polite no thanks.',
    testimonialAuthor: 'PLACEHOLDER — Owner, residential GC',
    faqs: [
      {
        question: 'Does it integrate with Buildertrend, CoConstruct, JobTread?',
        answer:
          'Yes. We integrate with the major construction CRMs and project tools. Leads, photos, and intake notes write back automatically.',
      },
      {
        question: 'Can it qualify leads by project type and budget?',
        answer:
          'Yes. We define your minimum-bar rules — project type, scope range, decision-maker, financing status. Only leads that pass get a site visit booked.',
      },
      {
        question: 'How does it handle change orders and sub coordination?',
        answer:
          'Change orders and sub calls follow custom transfer rules into your ops channel — different from the new-business queue.',
      },
      {
        question: 'What about commercial vs residential?',
        answer:
          'Account-based routing distinguishes commercial property managers from homeowners. Each gets its own intake script and routing rules.',
      },
      {
        question: 'How quickly can we go live?',
        answer:
          '10 to 14 business days for a typical shop. Faster if you already have a CRM with API access.',
      },
    ],
    caseStudySlug: 'placeholder-real-estate',
    related: ['electricians', 'plumbers', 'roofers'],
  },

  {
    slug: 'salons',
    name: 'Salons',
    nicheSingular: 'salon',
    metaTitle: 'AI Receptionist for Salons | Implenix',
    metaDescription:
      'AI receptionist for salons. Book appointments, handle stylist requests, and reduce no-shows — without keeping the front desk on the phone all day.',
    targetKeyword: 'ai receptionist for salons',
    relatedKeywords: [
      'salon booking ai',
      'salon answering service',
      'hair salon receptionist',
      'beauty salon call automation',
    ],
    intro:
      "Salons run on appointment density. Every minute the front desk spends on a booking call is a minute they're not handling the client in the chair. The math is brutal: a 6-chair salon with one front-desk staff fields ~180 booking calls a week, and on a busy Saturday at least 30% of them hit voicemail. Each missed call is a $80-$250 service that booked somewhere else. Implenix is the AI receptionist for salons: it answers every inbound inside one ring, books directly into Boulevard, Vagaro, Mindbody, or whatever you run, respects stylist availability and capacity rules, and reduces no-shows with multi-touch reminder calls. Specific stylist requests get matched against the booking calendar — the agent will not book Maria for an appointment when she's already double-booked. New-client intake captures referral source, hair history, and product allergies. Group bookings and bridal parties get routed to your senior coordinator. Reschedules and cancellations happen live without staff involvement. Walk-ins still get the personal touch from your front desk. Salons that ship Implenix typically reclaim 15-20 hours per week per front-desk team member and watch no-show rates drop 25-30% inside the first quarter. The chair stays full. The front desk stays out of phone hell.",
    heroStat: '+19h',
    heroStatLabel: 'reclaimed per week per front-desk team member',
    avgWeeklyCalls: 175,
    avgClientValue: 165,
    painPoints: [
      {
        title: 'Front desk drowning in booking calls during peak hours',
        description:
          'PLACEHOLDER — Saturday afternoons mean 40+ calls and a lobby full of clients. Front desk picks one to lose and it is usually the phone.',
      },
      {
        title: 'Stylist availability changes faster than the phone updates',
        description:
          'PLACEHOLDER — A stylist runs late, calls out, or shifts. The booking calendar updates but the front desk is behind, so calls quote times that no longer exist.',
      },
      {
        title: 'No-shows break the whole day',
        description:
          'PLACEHOLDER — Without consistent confirmation calls, no-show rates run 18-25%. Each one is dead chair time and a stylist losing money.',
      },
    ],
    useCases: [
      {
        title: 'Live booking against your salon software',
        description:
          'Boulevard, Vagaro, Mindbody, GlossGenius — the agent reads real availability and respects capacity rules per chair.',
      },
      {
        title: 'Stylist-specific request handling',
        description:
          'When a client asks for Maria, the agent checks her schedule, offers her next openings, and books only if she is actually available.',
      },
      {
        title: 'Multi-touch confirmation cuts no-show rate',
        description:
          'Outbound confirmation call 24 hours before, plus an SMS reminder. Reschedules happen live, not at the chair.',
      },
    ],
    stats: [
      { number: '+19h', label: 'reclaimed per FTE per week' },
      { number: '-28%', label: 'no-show rate' },
      { number: '+24%', label: 'after-hours bookings' },
    ],
    testimonialQuote:
      'PLACEHOLDER — Saturdays used to be chaos. Now the front desk is actually with our clients and the phone still gets answered.',
    testimonialAuthor: 'PLACEHOLDER — Owner, multi-chair salon',
    faqs: [
      {
        question: 'Does it integrate with Boulevard, Vagaro, Mindbody?',
        answer:
          'Yes. We support the major salon booking systems via direct API or webhook. Appointments write back live and capacity rules are respected per chair.',
      },
      {
        question: 'Can it handle requests for a specific stylist?',
        answer:
          'Yes. Stylist-aware booking — the agent checks the requested stylist\'s availability and only books real openings.',
      },
      {
        question: 'How does it handle cancellations and reschedules?',
        answer:
          'Live. The agent moves the booking, frees the slot, and writes the change back. No staff involvement needed for routine moves.',
      },
      {
        question: 'Can it handle group bookings or bridal parties?',
        answer:
          'Group bookings route to your senior coordinator via live transfer or callback queue, depending on your rules.',
      },
      {
        question: 'How long is deployment?',
        answer:
          '7 to 10 business days for most salons. Faster if you are already on a supported booking platform.',
      },
    ],
    caseStudySlug: 'placeholder-dental',
    related: ['med-spas', 'spas', 'chiropractors'],
  },

  {
    slug: 'accountants',
    name: 'Accountants',
    nicheSingular: 'accounting firm',
    metaTitle: 'AI Receptionist for Accountants | Implenix',
    metaDescription:
      'AI receptionist for accounting firms and CPAs. Handle tax-season call spikes, qualify new client intake, and route document requests — without burning your associates.',
    targetKeyword: 'ai receptionist for accountants',
    relatedKeywords: [
      'accounting firm answering service',
      'cpa receptionist ai',
      'tax season call handling',
      'accountant lead intake',
    ],
    intro:
      "Tax season for an accounting firm is a six-week phone tsunami sitting on top of an already-saturated calendar. Document requests, status checks, new-client intake, and a steady stream of \"can you just take a quick look\" calls collide with hard filing deadlines. Every call answered by an associate is billable hours not earned. Every call missed is a prospect filing somewhere else. Implenix is the AI receptionist for accountants: it answers every inbound inside one ring, runs your client intake script, captures business structure, prior preparer, document readiness, and entity complexity, then books the right service tier into the right partner's calendar. Existing clients get fast-path routing — name and SSN last-four lookup pulls them out of the new-client queue and into status-check or document-request handling. Document collection happens via SMS or secure portal links the agent sends mid-call. Engagement-letter status, e-file confirmations, and IRS notice handling each have their own intake script. Cold calls and tax-software solicitations get screened. The result: associates stay billable, partners only see qualified consults, and the firm captures 40-60% more new-business calls during peak season without hiring temporary staff. Off-season, the agent stays warm, handling year-round tax planning and bookkeeping intake without paying for capacity you do not need.",
    heroStat: '+47%',
    heroStatLabel: 'new-client intake during tax season',
    avgWeeklyCalls: 110,
    avgClientValue: 2200,
    painPoints: [
      {
        title: 'Tax season buries the phone line for 6 straight weeks',
        description:
          'PLACEHOLDER — March-April call volume runs 4-5x off-season. Without surge capacity, new-client calls die in voicemail and existing clients get frustrated.',
      },
      {
        title: 'Associates burn billable hours on intake and status checks',
        description:
          'PLACEHOLDER — Every "did you get my W-2" call answered by a senior associate is real money lost. The labor cost shows up on the P&L every April.',
      },
      {
        title: 'Document collection is a constant friction point',
        description:
          'PLACEHOLDER — Clients say they sent it; the firm never received it. Without a clean intake-and-receipt flow, returns stall and deadlines slip.',
      },
    ],
    useCases: [
      {
        title: 'New-client intake with entity-type triage',
        description:
          'Sole prop vs S-corp vs C-corp vs partnership routes to different service tiers and partners. Engagement complexity is captured up front.',
      },
      {
        title: 'Existing-client status-check handling',
        description:
          'Caller verification pulls existing clients out of the new-business queue. Status, document receipts, and e-file confirmations resolve without staff involvement.',
      },
      {
        title: 'Document collection via SMS portal link',
        description:
          'Mid-call the agent texts a secure portal link. Documents are attached to the engagement before the call ends.',
      },
    ],
    stats: [
      { number: '+47%', label: 'new-client intake at peak' },
      { number: '-22 hrs', label: 'partner phone time per week' },
      { number: '100%', label: 'after-hours coverage' },
    ],
    testimonialQuote:
      'PLACEHOLDER — Last March we kept up. That has not happened in 12 years. The agent ate the call volume so my partners could actually file returns.',
    testimonialAuthor: 'PLACEHOLDER — Managing partner, regional CPA firm',
    faqs: [
      {
        question: 'Does it integrate with our tax software and CRM?',
        answer:
          'Yes. We support direct integrations with the major practice-management systems (Karbon, Canopy, TaxDome) and webhook-based handoff to anything else.',
      },
      {
        question: 'Can it scale for tax-season call spikes?',
        answer:
          'Yes. Concurrent capacity is not capped per agent. The same system handles March 15 and August 15 with no overtime.',
      },
      {
        question: 'How does it handle existing-client status checks?',
        answer:
          'Caller verification (last-four SSN or client number) routes existing clients into a separate flow. Status and document checks resolve without escalation.',
      },
      {
        question: 'Can it handle document collection?',
        answer:
          'Yes. The agent texts a secure portal link mid-call, the client uploads, and the documents attach to the engagement record automatically.',
      },
      {
        question: 'Is it appropriate for sensitive tax information?',
        answer:
          'We follow IRS Publication 4557 guidance on safeguarding client data: encrypted in transit and at rest, role-based access, audit logs.',
      },
    ],
    caseStudySlug: 'placeholder-real-estate',
    related: ['law-firms', 'mortgage-brokers', 'marketing-agencies'],
  },

  {
    slug: 'marketing-agencies',
    name: 'Marketing Agencies',
    nicheSingular: 'marketing agency',
    metaTitle: 'AI Receptionist for Marketing Agencies | Implenix',
    metaDescription:
      'AI receptionist for marketing and creative agencies. Qualify RFPs, screen client referrals, and stop dropping six-figure deals to voicemail.',
    targetKeyword: 'ai receptionist for marketing agencies',
    relatedKeywords: [
      'agency lead qualification ai',
      'marketing agency answering service',
      'agency receptionist',
      'rfp intake automation',
    ],
    intro:
      "Marketing agencies have a unique phone problem: most inbound calls are either six-figure RFPs or someone trying to sell you SEO. The cost of mis-routing those is asymmetric. The wrong filter sends a great-fit RFP to voicemail and forwards a cold pitch to your founder. Most agencies handle this by routing everything to a junior account person — which means the RFP either gets a generic response or sits in a queue for two days. By then, the prospect has talked to three other agencies. Implenix is the AI receptionist for marketing agencies: it answers every inbound inside one ring, runs RFP qualification (industry, budget range, timeline, existing-vendor status, decision-maker confirmation), and either books a discovery call directly into your founder or strategy lead's calendar or sends a polite no-thanks to anything below your minimum bar. Cold pitches and vendor solicitations get screened. Existing-client account questions route to the right account team in real time. Press and partnership inquiries route to your comms team. The agent learns your service tiers and minimum project size, so an inquiry for a $5K logo never lands on a calendar built for $250K retainers. After every qualified call, the lead lands in HubSpot or whatever you run with full context — including a recording your business development lead can listen to before the discovery call.",
    heroStat: '+62%',
    heroStatLabel: 'qualified RFP discovery calls booked',
    avgWeeklyCalls: 65,
    avgClientValue: 12000,
    painPoints: [
      {
        title: 'Every cold pitch ends up on the founder\'s desk',
        description:
          'PLACEHOLDER — The lazy filter sends every "let me sell you SEO" call straight to leadership. Real RFPs get lost in the same queue.',
      },
      {
        title: 'Six-figure inquiries decay if not answered same-day',
        description:
          'PLACEHOLDER — A prospect calling three agencies on Tuesday morning makes a shortlist by Tuesday afternoon. If you call back Wednesday, you are off the list.',
      },
      {
        title: 'Junior account staff cannot qualify high-end retainers',
        description:
          'PLACEHOLDER — Routing inbound to a coordinator means good-fit prospects get a generic intake. Bad fit, you waste a discovery slot. Either way, lost.',
      },
    ],
    useCases: [
      {
        title: 'RFP qualification against your minimum-project rules',
        description:
          'Industry, budget range, timeline, decision-makers — captured up front. Below-floor inquiries get a polite no-thanks. Above-floor get booked into discovery.',
      },
      {
        title: 'Existing-client routing to the right account team',
        description:
          'Caller verification pulls clients out of the new-business queue and into their pod\'s account-management line.',
      },
      {
        title: 'Cold-pitch and vendor-solicitation screening',
        description:
          'Pattern-matched solicitations route to a callback queue your ops team reviews weekly — never to a founder.',
      },
    ],
    stats: [
      { number: '+62%', label: 'qualified discovery calls' },
      { number: '<2 min', label: 'response time on inbound' },
      { number: '-89%', label: 'cold-pitch noise to leadership' },
    ],
    testimonialQuote:
      'PLACEHOLDER — Our discovery slots used to be 50% tire-kickers. Now they are 90% real RFPs. Our close rate doubled because we stopped wasting strategist time on bad fits.',
    testimonialAuthor: 'PLACEHOLDER — Founder, mid-market agency',
    faqs: [
      {
        question: 'Does it integrate with HubSpot, Salesforce, or our CRM?',
        answer:
          'Yes. Direct integrations with the major agency CRMs. Calls, transcripts, and qualified-lead notes write back automatically.',
      },
      {
        question: 'How do we set the minimum-project bar?',
        answer:
          'You define it during scoping — minimum retainer, minimum project size, accepted industries, anti-fit signals (e.g., crypto, MLM). The agent enforces it.',
      },
      {
        question: 'Can it handle press and partnership inquiries differently?',
        answer:
          'Yes. Press and partnership calls follow their own intake path and route to your comms or partnerships lead.',
      },
      {
        question: 'Will it screen out cold pitches without offending callers?',
        answer:
          'The agent gives every caller a respectful response. Cold pitches get a "we evaluate vendor inquiries quarterly — leave details" path.',
      },
      {
        question: 'How long is deployment?',
        answer:
          '7 to 10 business days. Most agencies are live in two weeks with their qualification logic tuned.',
      },
    ],
    caseStudySlug: 'placeholder-real-estate',
    related: ['accountants', 'law-firms', 'real-estate'],
  },
];

export const INDUSTRY_PROFILE_SLUGS = INDUSTRY_PROFILES.map((p) => p.slug);

export function getIndustryProfile(slug: string): IndustryProfile | undefined {
  return INDUSTRY_PROFILES.find((p) => p.slug === slug);
}
