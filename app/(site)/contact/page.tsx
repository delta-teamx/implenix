import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ContactForm } from './ContactForm';

export const metadata: Metadata = buildMetadata({
  title: 'Talk to Implenix — Contact Us',
  description:
    'Tell us about your business. The Implenix team responds within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-24">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ contact // implenix ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4">
            Talk to Implenix
          </h1>
          <p className="mt-4 font-body text-white/75 max-w-2xl">
            Tell us about your business. We will follow up within one business
            day.
          </p>
        </div>
      </section>

      <section className="bg-black border-t border-brand-purple/20">
        <div className="max-w-content mx-auto px-6 py-20 grid lg:grid-cols-[2fr_1fr] gap-10 items-start">
          <ContactForm />
          <aside className="border border-brand-cyan/30 bg-brand-dark p-6">
            <p className="font-heading text-white">Office</p>
            <p className="mt-2 text-sm text-white/70 font-body">
              PLACEHOLDER — Implenix HQ details to be added.
            </p>
            <p className="mt-6 font-heading text-white">Response time</p>
            <p className="mt-2 text-sm text-white/70 font-body">
              We respond within 1 business day.
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
