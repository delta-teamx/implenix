# Lighthouse pre-flight checklist for Implenix

Static analysis of every signal Lighthouse will measure on the
production deployment, with what's already done and what to verify
once the site is live.

## Performance — target ≥ 90 on mobile

### Already in place

- **Static SSG** for all 141 pages via Next.js — no SSR latency
- **Image optimization** via `next/image` with WebP output and
  responsive sizes
- **Code splitting** automatic per route (verified in build output —
  shared JS is 87.2 KB)
- **Font loading** via `next/font` (no external @font-face requests)
- **No render-blocking third-party scripts** at module load — GTM
  uses `strategy="lazyOnload"`
- **CSS in `<head>`** via Tailwind static extraction — no FOUC

### To verify after deploy

- **LCP (Largest Contentful Paint) < 2.5s.** Hero text + iPhone
  mockup are the LCP elements. Should be well under target on
  static Vercel edge cache.
- **CLS (Cumulative Layout Shift) < 0.1.** Pre-allocate the hero
  iPhone mockup container with explicit aspect ratio. Verify no
  layout shift on font load.
- **INP (Interaction to Next Paint) < 200ms.** Heaviest interactions
  are the LiveCallsSection tab switch and the IndustrySlider scroll.
  Both are local-state-only operations.
- **TBT (Total Blocking Time) < 200ms.** Verify no long-task
  warnings — the only candidate is contentlayer hydration on the
  blog page.

### Potential issues to address post-deploy

| Signal | Risk | Mitigation |
|---|---|---|
| Hero animations | Framer Motion entrance | Already gated to `viewport: once` — should fire once and stop |
| Unsplash hero images | Network latency | Set `priority` on above-fold hero image (already done in blog [slug]/page.tsx) |
| Calendly iframe | Heavy 3rd-party JS | Already `loading="lazy"` — fires only when scrolled into view |
| GTM | Render-blocking risk | Already `lazyOnload` — fires after first paint |

## Accessibility — target ≥ 95

### Already in place

- **Semantic HTML** — `<article>`, `<section>`, `<header>`, `<footer>`, `<nav>`
- **Breadcrumb landmarks** on every content page
- **Skip-link not yet added** — see fix list
- **Alt text on every `<Image>`** — hero images use descriptive alts; Lucide icons don't need alts
- **ARIA labels on every icon-only button** — search the codebase for `aria-label=` to confirm
- **Focus states** — Tailwind defaults work; brand-colored focus rings via `focus:border-brand-purple`
- **Color contrast** — brand cyan (#3dfaff) on black exceeds 7:1; brand purple (#bb00ff) on black is 4.5:1+
- **Form labels** — every input has a `<label htmlFor>`
- **Keyboard navigation** — popup honors Escape, sticky CTA dismiss is keyboard-accessible

### To verify after deploy

- **Color contrast on white/65 text on black** — should be 5:1+, but worth running axe
- **Focus order** — tab through every page, verify no traps and no orphaned tabindex
- **Screen reader announce on dynamic content** — `aria-live="polite"` on AnimatedCallTranscript
- **Form validation** — error messages are visible and associated with inputs

### Known accessibility improvements to ship

| Issue | Severity | Fix |
|---|---|---|
| No skip-link | Medium | Add `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>` in app/layout.tsx |
| No `<main>` landmark | Medium | Wrap `{children}` in `<main id="main">` in app/layout.tsx |
| Lang attribute | Easy | Confirm `<html lang="en">` in layout |

## Best Practices — target ≥ 95

### Already in place

- **HTTPS everywhere** — Vercel forces HTTPS
- **No mixed content** — all assets HTTPS or relative
- **Doctype** — Next.js auto-emits
- **Charset declaration** — Next.js auto-emits
- **No console errors** — verified locally; check in Vercel preview
- **Source maps** disabled in production (Next.js default)
- **No deprecated APIs** — modern React 18, Next 14

### To verify after deploy

- **No `errors in console` on every page** — Lighthouse will flag any
- **Image aspect ratios respected** — `next/image` with `fill` and parent aspect-ratio enforces this
- **No browser errors related to third-party scripts** (GTM, Calendly, Unsplash)

## SEO — target 100

### Already in place

- **Every page has unique title and meta description** — verified by `npm run audit:meta` across 141 pages
- **All titles ≤ 60 chars, all descriptions ≤ 155 chars**
- **Canonical URLs on every page** via `alternates.canonical` in buildMetadata
- **Robots.txt** allows public pages, blocks `/lp/`, `/api/`, `/admin/`, `/preview/`
- **Sitemap.xml** generated for all 117 indexable pages
- **Mobile-friendly viewport meta** — Next.js auto-emits
- **Hreflang** — not needed (English-only)
- **Structured data** — Organization, WebSite, SoftwareApplication, LocalBusiness, Service, Article, BlogPosting, FAQ, BreadcrumbList, Review, AggregateRating, HowTo, Speakable
- **Anchor text descriptive** — internal links use real text, not "click here"
- **Crawl-able links** — all use `<Link>` from next/link

### To verify after deploy

- **Search Console** — submit sitemap, verify coverage report shows >100 indexed pages
- **Rich results test** — https://search.google.com/test/rich-results on homepage, industry page, blog post, case study
- **Mobile usability** — Search Console will flag any mobile-unfriendly pages

## PWA — not pursuing

The site is a marketing site, not a PWA. We skip the PWA category
score. No service worker, no manifest installability beyond the
basic webmanifest already present.

## How to run Lighthouse

After deploying to production:

```bash
# Web UI (easiest)
https://pagespeed.web.dev/?url=https://implenix.net/

# Lighthouse CLI
npx lighthouse https://implenix.net/ \
  --output=html \
  --output-path=./reports/lighthouse.html \
  --chrome-flags="--headless"

# CI integration (run on every Vercel preview)
npx lhci autorun --collect.url=https://implenix.net/
```

Pages to test (run Lighthouse against each):

1. `/` — homepage (LCP test, hero performance)
2. `/ai-receptionist` — pillar page
3. `/ai-receptionist-for-hvac-companies` — industry programmatic
4. `/case-studies/placeholder-hvac` — case study with audio player
5. `/blog/voice-ai-guide-for-local-business` — blog with hero image
6. `/audit` — interactive tool
7. `/contact` — Calendly embed
8. `/pricing` — pricing page

## Targets per page

| Page type | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Homepage | 90+ | 95+ | 95+ | 100 |
| Pillar / industry | 92+ | 95+ | 95+ | 100 |
| Blog post | 92+ | 95+ | 95+ | 100 |
| Case study | 88+ (audio) | 95+ | 95+ | 100 |
| Audit tool | 85+ (interactive) | 95+ | 95+ | 100 |
| Contact (Calendly) | 80+ (iframe) | 95+ | 95+ | 100 |

Calendly iframe is the largest performance cost site-wide. Acceptable
trade-off — the booking conversion is the entire reason the page
exists.

## If a page scores below target

Diagnostic checklist:

1. **LCP slow?** Check the LCP element in the Performance trace. If
   it's an image, add `priority` prop. If it's text, check font
   loading.
2. **CLS high?** Find the element shifting. Add aspect-ratio or
   reserved height to the parent.
3. **TBT high?** Find the long task in Performance trace. Likely
   third-party JS — check if it can be deferred.
4. **Accessibility issue?** Run `npx axe-core <url>` for detail.
5. **SEO issue?** Lighthouse usually flags missing meta or canonical
   — check `lib/seo.ts`.

## What to do once production scores are in

- Document baseline scores per page
- Re-run Lighthouse weekly during first month
- Track Core Web Vitals via Search Console (real-user metrics matter more than lab Lighthouse over time)
- File specific tickets for any score under target
