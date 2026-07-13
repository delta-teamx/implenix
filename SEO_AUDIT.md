# Implenix SEO audit — 2026 shipping state

Comprehensive audit against Google 2026 guidelines, Bing Webmaster
guidance, and AEO/GEO best practices for AI search engines. Covers
technical SEO, on-page, off-page, content strategy, competitor gap
analysis, and the specific actions to take this week vs this month.

**Overall grade:** Strong. Domain has authority (DR 26, ~1900 backlinks,
7-month age); content coverage is comprehensive (29 blogs mapping to 56
of 56 target keywords); technical SEO is production-ready. Main gaps
are: get it live and indexed, refresh backlinks, build topical hub
pages.

## Primary keyword targets

Source: uploaded CSV. Homepage focus keyword confirmed.

| Target keyword | KD | Vol (US) | Landing page | Status |
|---|---|---|---|---|
| ai receptionist | 53 | 5,400 | `/ai-receptionist` + `/` | ✅ Answer block, schema, dedicated pillar |
| hvac ai agent | 25 | — | `/ai-receptionist-for-hvac-companies` + `/blog/hvac-ai-agent-guide` | ✅ |
| ai voice agent for real estate | 19 | — | `/ai-receptionist-for-real-estate` + `/blog/ai-voice-agent-real-estate` | ✅ |
| what is agentic ai in simple terms | 61 | — | `/blog/what-is-agentic-ai` | ✅ Answer block |
| what is a rag ai agent | 56 | — | `/blog/rag-llm-mcp-ai-agent-architecture` | ✅ Answer block |
| what are the different types of ai agents | 55 | — | `/blog/types-of-ai-agents-explained` | ✅ Answer block |
| ... | ... | ... | ... | 56 of 56 CSV keywords covered |

Full mapping in `/CONTENT_INVENTORY.md` (not shipped — request if needed).

## What's live and working

### Technical SEO ✅

- **Static SSG** — 157 pages pre-rendered, edge-served, ~87 KB shared JS
- **Sitemap** — `implenix.net/sitemap.xml` with weighted priorities (homepage 1.0, pillar 0.95, money pages 0.9, blog 0.6)
- **Robots.txt** — allows public, blocks `/lp/`, `/api/`, `/admin/`, `/preview/`
- **Canonical URLs** — every page has `alternates.canonical` set to the public URL (not the internal rewrite target)
- **Mobile responsive** — Tailwind throughout, mobile-first breakpoints, tested at 320/390/768
- **Core Web Vitals ready** — priority images on hero, lazy iframes on Calendly/Meet, next/font for zero FOUC
- **Semantic HTML** — `<main>`, `<article>`, `<nav>`, breadcrumbs, skip link for keyboard nav

### Structured data ✅

Every page emits appropriate JSON-LD:

- **Homepage:** Organization + WebSite + SoftwareApplication (with AggregateRating 5★ × 6)
- **Pillar `/ai-receptionist`:** SoftwareApplication + FAQ + Service + AggregateRating + Speakable
- **Industry pages:** LocalBusiness + FAQ + Service + AggregateRating + Speakable
- **Comparison pages:** Article + FAQ + Service + Speakable
- **Case studies:** Article + Review (5★ per client) + AggregateRating + Speakable
- **Blog posts:** BlogPosting + optional HowTo + Speakable
- **All pages:** BreadcrumbList

### AEO / GEO layer ✅

For Google AI Overviews, Perplexity, ChatGPT search, and Bing Copilot:

- **Answer blocks** at top of high-KW blog posts and pillar (`data-answer`, `data-speakable`)
- **Speakable schema** defaults include `[data-answer]` and `[data-speakable]` selectors
- **FAQ schema** on 40+ pages for People Also Ask box eligibility
- **HowTo schema** on the 4 playbook posts (missed-call calc, nonprofit AI, prompts playbook, sales forecasting)

### On-page ✅

- **All 157 pages:** titles ≤60 chars, meta descriptions ≤155 chars (verified `npm run audit:meta`)
- **Per-page OG images:** blog covers use branded ImageResponse generator matching your reference design (purple BLOGS pill, IMPLENIX.NET/@IMPLENIX.AI footer)
- **Alt text** on every rendered `<Image>`
- **Descriptive anchor text** on all internal links (no "click here")

### Content ✅

- **29 blog posts** covering 56 of 56 CSV keywords
- **25 industry pages** at `/ai-receptionist-for-*`
- **5 comparison pages** at `/ai-receptionist-vs-*`
- **3 competitor alternative pages** (`smith-ai-alternative`, `goodcall-alternative`, `ruby-receptionists-alternative`)
- **6 case studies** with 5★ Review schema
- **10 glossary entries** at `/glossary/*`
- **7 info-cluster pages** (24-7, virtual, call-answering, phone-answering, benefits, how-does-it-work, what-is)

## What to do THIS WEEK (blocks launch)

Ordered by impact and dependency:

### 1. Get the domain deployed to Vercel

Nothing indexes until it's live. Reference `LAUNCH_CHECKLIST.md` — env
vars, DNS, redirect URIs.

### 2. Submit sitemap in Google Search Console

Search Console → property `implenix.net` → **Sitemaps** → submit
`https://implenix.net/sitemap.xml`. Google will crawl within 24-72
hours.

### 3. Submit sitemap in Bing Webmaster Tools

Same operation. Bing indexes faster than Google in 2026 (5-7 days vs
2-4 weeks) and Yahoo pulls from Bing's index.

### 4. Enable IndexNow

Set `INDEXNOW_PING=1` in Vercel Production. Postbuild script pings
Bing / Yandex / Naver / Seznam on every deploy — instant indexing
instead of waiting for crawler cycles.

### 5. Force Google to prioritize the homepage keyword

Manually request indexing in Search Console for the 8 highest-value
pages:

- `/` (homepage)
- `/ai-receptionist` (primary KW target)
- `/ai-receptionist-for-hvac-companies`
- `/ai-receptionist-for-dentists`
- `/ai-receptionist-for-real-estate`
- `/audit`
- `/blog/what-is-agentic-ai`
- `/blog/how-much-does-ai-agent-cost`

Search Console → URL Inspection → paste URL → **Request Indexing** for each.

### 6. Set up Google Business Profile

Register `implenix.net` as a business with your primary service area.
Local SEO signal that lifts LocalBusiness schema visibility.

### 7. Rich Result validation

Run each page type through https://search.google.com/test/rich-results
to catch any schema errors before Google flags them:

- Homepage
- `/ai-receptionist`
- An industry page
- A comparison page
- A case study
- A blog post

Expected: all pass with rich result eligibility for FAQ, Article,
Service, Review, HowTo, and Speakable.

## What to do THIS MONTH (content + linking work)

### 1. Build 4 topical hub pages (topical authority signal)

Google 2026 rewards topical authority — cluster pages that
comprehensively cover a theme. Recommended hubs:

- **`/blog/topics/agentic-ai`** — hub for what-is-agentic-ai,
  rag-llm-mcp, types-of-ai-agents, feedback-loops, multi-agent,
  workplace-ai, ethical-considerations. 8 posts cluster.
- **`/blog/topics/industry-guides`** — hub for hvac, real-estate,
  legal, medspa, finance, healthcare, retail. 8 posts cluster.
- **`/blog/topics/operator-playbooks`** — hub for missed-call-cost,
  prompts-playbook, nonprofit-agent, sales-forecasting,
  hang-up-research, workplace-ai. 7 posts cluster.
- **`/blog/topics/decision-frameworks`** — hub for ROI, cost, best-for-
  smb, chatbots-vs-humans, voice-ai-guide, security-questionnaires,
  call-center. 8 posts cluster.

Each hub gets its own H1 targeting the theme keyword and links out to
every post in the cluster. This is worth roughly a 15-30% ranking
lift on cluster keywords once Google crawls it.

I can ship the hub pages in one commit — say the word.

### 2. Internal linking audit + fix

Current state: most blog posts have 2-3 internal links. Google 2026
guidance suggests 4-8 contextual internal links per 1,500-word
article. Specifically:

- Every industry page should link to 2+ related blog posts
- Every blog post should link to at least one industry page and one
  pillar page
- The pillar `/ai-receptionist` should link out to 5+ high-KW blog
  posts
- Every comparison page should link to the related industry page and
  the pricing page

I can automate this with a link-audit script and one commit that
adds ~150 net new internal links across the site.

### 3. Refresh backlinks — priority list

DR 26 with ~1900 backlinks is a strong foundation. To grow:

**Immediate (this month):**

- Sign up for **HARO / Featured.com / Qwoted / Terkel** — templates
  ready in `PRESS_HARO_TEMPLATES.md`. Expect 2-5 quality placements
  per month with consistent pitching.
- **Podcast outreach:** identify 20 SMB / operations / voice AI
  podcasts, pitch 5-min segments with specific angles from the blog
  content. Every episode = 1 DR 25+ backlink from the show notes.

**Medium (3-6 months):**

- Guest posts on: Inman (real estate), ACHRNews (HVAC), Dentistry IQ
  (dental), Medesthetics (med spa), Above the Law (legal),
  Entrepreneur, Small Business Trends, Search Engine Journal
- Local business chamber directories — every industry city cluster
- Partnership backlinks from CRM/dispatch vendors your integration
  page mentions (ServiceTitan, Housecall Pro, Follow Up Boss, etc.)

**What to avoid:**

- Bulk directory submissions (spammy)
- Guest posts on farms (Google penalizes)
- Reciprocal link exchanges (penalized)
- Paid backlinks in disguise (penalized)

### 4. Competitor gap analysis

Your named competitors and how you compare:

| Competitor | Age | DR | Backlinks | Sitemap size | Gap |
|---|---|---|---|---|---|
| synthflow.ai | 5 yr | 71 | 10.1K | Large | DR is 45 points ahead. Not a fair fight yet. |
| oneai.com/outbound | 12 yr | 60 | 100 | Small | Older domain, few backlinks — beatable on content depth. |
| lindy.ai/blog/ai-call-bot | 3 yr | 75 | 487 | Small | High DR, small footprint. Content-quality plays win. |
| trellus.ai/post/outbound-ai-calling | 2 yr | 43 | 50 | Small | Similar age/DR to you. Direct competition — beat on content breadth. |

**Where you can win in 3-6 months:**

- **Long-tail informational queries** — `what is agentic ai in simple
  terms`, `how much ai agent cost`, `who invented ai agents` — you
  have 29 dedicated posts. Synthflow/Lindy/Trellus have 2-3 each.
- **Industry-specific queries** — `hvac ai agent`, `ai agents for
  medspas`, `ai agents for lawyers` — you have dedicated pages
  AND blog posts. Competitors have general marketing pages.
- **AEO/GEO surfaces** — your Answer blocks + Speakable schema are
  more thorough than any competitor's. Google AI Overviews will
  quote you first once indexed.

**Where competitors keep the lead:**

- **Head terms** — "AI receptionist" itself. Synthflow's DR 71
  dominates. Your play is long-tail traffic that funnels to your
  pillar/audit/booking flow.

### 5. Speed audit (post-deploy)

Once live, run `https://pagespeed.web.dev/?url=https://implenix.net/`
and check specifically:

- **LCP < 2.5s on mobile** — the hero should hit this given priority
  image + edge caching
- **CLS < 0.1** — all aspect ratios reserved
- **INP < 200ms** — the LiveCallsSection tab switcher is the heaviest
  interaction; may need to lazy-load transcript data

`LIGHTHOUSE_PREFLIGHT.md` has the full checklist per page type.

## Content roadmap — next 30 days

If you keep publishing 1 blog post per week, prioritize:

1. **Comparison posts** — e.g. "Synthflow vs Implenix," "Lindy vs
   Implenix," "Vapi vs Implenix." These rank fast on branded
   competitor keywords.
2. **Case study expansions** — each case study is a natural blog
   post + case study double. Republish each case study story as a
   blog with a different angle.
3. **How-to playbooks** — HowTo schema wins featured snippets.
   Candidates: "How to write an AI voice agent script," "How to
   choose between AI receptionist vendors."
4. **News-hook posts** — TCPA updates, Google Meet API changes, new
   AI voice models. Fast-moving keywords get fewer results and
   easier rankings.

## Content queue you should assign next

Following your "act like a manager" framing — if you have a
copywriter, this is the assignment list:

**Round 1 (next 2 weeks):**

1. `synthflow-vs-implenix` — competitor comparison, ~2,000 words
2. `lindy-vs-implenix` — same shape
3. `vapi-vs-implenix` — same shape (vapi is a common competitor)
4. `how-to-write-an-ai-receptionist-script` — HowTo schema

**Round 2 (weeks 3-4):**

5. `ai-receptionist-for-veterinarians` — extension of medical playbook
6. `ai-receptionist-for-property-management` — new vertical
7. `how-to-migrate-from-answering-service-to-ai` — HowTo migration
8. `hvac-ai-agent-servicetitan-integration` — long-tail integration

Each post should include:

- Answer block at top targeting the primary keyword
- 4-6 contextual internal links
- 2-3 heading questions (H2s as questions rank for PAA boxes)
- Schema (article + HowTo where applicable + speakable)
- Cover image via the ImageResponse generator

Assign to your copywriter with target keyword + 1-line brief per
post. Standard turnaround should be 2-3 posts per week.

## Long-term content strategy (3-6 months out)

### Topical authority buildout

Every industry vertical should have:

- 1 pillar page (`/ai-receptionist-for-X`) — already done for 25
- 2-3 blog posts covering that industry
- 1 case study
- Linked into industry-specific hub page

Currently: 6 industries have blog + case study + pillar. 19 have
pillar only. Filling the gap for the top 6 more industries (dental,
plumbers, med spas, roofers, electricians, auto repair) doubles
your industry topical authority.

### Video content

Text-based AEO wins today. Video is coming — Google is increasingly
including video in AI Overviews. Consider:

- 60-second explainer videos per industry (25 videos over 6 months)
- Short-form for TikTok / Reels / YouTube Shorts with call recording
  clips
- Long-form YouTube for deployment case studies (once you have client
  permission)

### Podcast strategy

Two paths:

1. **Guest appearances** — 5-10 podcast guest slots per quarter,
   backlinks from show notes
2. **Own podcast** — riskier but builds long-term brand + backlinks
   as guests link back

For a DR 26 domain, path 1 has better short-term ROI.

## Common questions

**"Should I care about Yahoo?"**

Yahoo Search is powered by Bing. Rank on Bing = rank on Yahoo. No
separate work needed.

**"What about DuckDuckGo?"**

Same — powered largely by Bing + your own SEO signals. Same work.

**"What about ChatGPT search / Perplexity / Claude?"**

The Answer blocks and Speakable schema already installed target
these. Additional lever: publish structured JSON-LD SoftwareApplication
schema (done) and ensure your business info is on Wikipedia (build
this in 3-6 months once you have citations to reference).

**"Do I need to disavow bad backlinks?"**

Only if Google Search Console flags manual action. Most sites don't
need this. Check the "Links" report monthly.

**"When will I see rankings?"**

Timeline honest:

- Week 1-2: sitemap indexed, pages discoverable
- Week 3-6: long-tail keywords start ranking (positions 20-40)
- Month 2-3: mid-tail keywords entering position 10-20
- Month 3-6: head terms competing for page 1
- Month 6+: sustained rankings dependent on backlink acquisition rate

Domain age (7 months) helps but is not enough — the DR 26 needs to
climb through active backlink work, targeting DR 40 by month 6 and
DR 50+ by month 12 to meaningfully compete with Synthflow.

## Files in the repo that support this audit

- `LAUNCH_CHECKLIST.md` — env vars, verification, deploy steps
- `LIGHTHOUSE_PREFLIGHT.md` — per-page performance targets + diagnostic
- `PRESS_HARO_TEMPLATES.md` — 3 backlink outreach templates
- `SEO_AUDIT.md` — this document
- `scripts/audit-meta.mjs` — automated meta title/description linter
- `scripts/indexnow-ping.mjs` — automated IndexNow submission on every deploy

## What to do RIGHT NOW

If you read only one section, read this:

1. Deploy to Vercel (blocking everything)
2. Set env vars from `LAUNCH_CHECKLIST.md`
3. Submit sitemap in Google Search Console + Bing Webmaster
4. Set `INDEXNOW_PING=1`
5. Request indexing on the 8 priority URLs in Search Console
6. Book a HARO account and start pitching (2 hrs/week)

Everything else is optimization on top of a live, indexed site. Get
it live first.
