import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const COLUMNS = [
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
    heading: 'Solutions',
    links: [
      { href: '/solutions/ai-receptionist', label: 'AI Receptionist' },
      { href: '/solutions/ai-followup', label: 'AI Follow-up' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { href: '/blog', label: 'Blog' },
      { href: '/docs/getting-started/quick-start', label: 'Docs' },
      { href: '/resources', label: 'Guides' },
    ],
  },
  {
    heading: 'Connect',
    links: [
      { href: '#', label: 'LinkedIn' },
      { href: '#', label: 'X / Twitter' },
      { href: '#', label: 'YouTube' },
    ],
  },
];

export function Footer() {
  return (
    <footer>
      <section className="bg-brand-dark border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h2 className="font-heading text-3xl md:text-4xl text-white max-w-xl">
            Ready to stop missing calls?
          </h2>
          <Link
            href="/contact"
            data-cta-location="footer-cta"
            data-cta-type="primary"
            className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
          >
            Book a Demo <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <div className="bg-black">
        <div className="max-w-content mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-heading text-brand-purple text-2xl"
            >
              Implenix
            </Link>
            <p className="mt-4 text-white/60 text-sm">
              We Automate the Call. You Close the Deal.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-heading text-white text-sm uppercase tracking-widest mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-brand-cyan text-sm transition-colors"
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
          <div className="max-w-content mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/50">
            <span>© 2025 Implenix. All rights reserved.</span>
            <span>We Automate the Call. You Close the Deal.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
