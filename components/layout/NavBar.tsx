'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { href: '/solutions/ai-receptionist', label: 'Solutions' },
  { href: '/ai-receptionist-for-hvac-businesses', label: 'Industries' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/resources', label: 'Resources' },
  { href: '/blog', label: 'Blog' },
  { href: '/docs/getting-started/quick-start', label: 'Docs' },
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-0 border-b border-brand-purple/20">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 h-14">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-heading text-brand-purple text-xl tracking-tight"
            data-cta-location="nav"
            data-cta-type="logo"
          >
            Implenix
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cta-location="nav"
                className="text-[13px] text-white/85 hover:text-brand-cyan transition-colors duration-150 font-body"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            data-cta-location="nav"
            data-cta-type="secondary"
            className="text-[13px] text-white/85 hover:text-brand-cyan font-body"
          >
            Sign in
          </Link>
          <Link
            href="/contact"
            data-cta-location="nav"
            data-cta-type="primary"
            className="inline-flex items-center gap-1 bg-brand-purple text-white font-medium text-[13px] px-4 py-2 rounded-sm hover:opacity-90"
          >
            Book a Demo <ArrowRight size={14} />
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-14 bg-brand-dark z-40 flex flex-col px-6 py-8 gap-5 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              data-cta-location="nav"
              className="text-xl font-heading text-white border-b border-brand-purple/20 pb-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            data-cta-location="nav"
            data-cta-type="primary"
            className="bg-brand-purple text-white text-center font-medium px-5 py-3 rounded-sm"
          >
            Book a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
