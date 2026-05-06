import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/common/Badge';
import { LeadForm } from '@/components/common/LeadForm';
import { LogoLockup } from '@/components/common/LogoLockup';

const COLUMNS = [
  {
    heading: 'Product',
    links: [
      { href: '/solutions/ai-receptionist', label: 'AI Receptionist' },
      { href: '/solutions/ai-followup', label: 'AI Follow-up' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/preview/dashboard', label: 'Inside the dashboard' },
      { href: '/docs/getting-started/quick-start', label: 'Documentation' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { href: '/ai-receptionist-for-hvac-businesses', label: 'HVAC' },
      { href: '/ai-receptionist-for-dental-businesses', label: 'Dental' },
      { href: '/ai-receptionist-for-real-estate-businesses', label: 'Real Estate' },
      { href: '/ai-receptionist-for-law-firms-businesses', label: 'Law Firms' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about', label: 'About' },
      { href: '/contact', label: 'Contact' },
      { href: '/privacy-policy', label: 'Privacy' },
      { href: '/terms', label: 'Terms' },
    ],
  },
  {
    heading: 'Tools',
    links: [
      { href: '/audit', label: 'Free missed-call audit' },
      { href: '/try-it', label: 'Hear it live' },
      { href: '/blog', label: 'Blog' },
      { href: '/resources', label: 'Guides & Playbooks' },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <section className="bg-brand-dark border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <Badge label="Find out what you're losing" variant="purple" />
            <h2 className="font-heading text-3xl md:text-5xl text-white leading-[1.05] max-w-2xl">
              See what missed calls cost you last month.
            </h2>
            <p className="font-body text-white/70 max-w-xl">
              Free 60-second audit. Industry-grade estimate of your lost
              pipeline, then a deployment plan to recover it.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
            <Link
              href="/audit"
              data-cta-location="footer-cta"
              data-cta-type="primary"
              className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
            >
              Get my free audit <ArrowRight size={16} />
            </Link>
            <Link
              href="/try-it"
              data-cta-location="footer-cta"
              data-cta-type="secondary"
              className="inline-flex items-center gap-2 border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
            >
              Hear it live
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-16 grid grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-5">
            <LogoLockup size="md" />
            <p className="text-white/60 text-sm font-body max-w-xs">
              We Automate the Call. You Close the Deal.
            </p>
            <div className="border border-brand-purple/20 bg-brand-dark p-4">
              <p className="font-mono text-[10px] uppercase tracking-widest text-brand-cyan mb-2">
                ▸ Field notes by email
              </p>
              <p className="font-body text-xs text-white/65 mb-3 leading-relaxed">
                Operator playbooks, deployment notes, and tuning tips. One
                email per week. No spam.
              </p>
              <LeadForm variant="newsletter" ctaLocation="footer-newsletter" />
            </div>
            <p className="text-xs text-white/45 font-mono uppercase tracking-widest">
              ▸ implenix.net
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-mono text-white/55 text-xs uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/85 hover:text-brand-cyan text-sm font-body transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50 font-mono uppercase tracking-widest">
            <span>© 2025 Implenix. All rights reserved.</span>
            <span>We Automate the Call. You Close the Deal.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
