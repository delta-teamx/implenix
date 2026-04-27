'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
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
    <header className="sticky top-0 z-50 bg-brand-dark border-b border-brand-purple/20">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 h-16">
        <Link
          href="/"
          className="font-heading text-brand-purple text-2xl tracking-tight"
          data-cta-location="nav"
          data-cta-type="logo"
        >
          Implenix
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cta-location="nav"
              className="text-sm text-white hover:text-brand-cyan transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          data-cta-location="nav"
          data-cta-type="primary"
          className="hidden lg:inline-flex bg-brand-purple text-white font-medium text-sm px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
        >
          Book a Demo
        </Link>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-brand-dark z-40 flex flex-col px-6 py-8 gap-6 overflow-y-auto">
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
