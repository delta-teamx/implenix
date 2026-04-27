import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'The terms of service governing Implenix products and services.',
  path: '/terms',
});

export default function TermsPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl md:text-5xl">Terms of Service</h1>
      {/* REPLACE WITH LEGAL COPY REVIEWED BY COUNSEL */}
      <div className="prose-implenix mt-10">
        <p>
          PLACEHOLDER LEGAL COPY — replace with the terms of service reviewed
          by counsel.
        </p>
        <h2>Use of services</h2>
        <p>PLACEHOLDER.</p>
        <h2>Acceptable use</h2>
        <p>PLACEHOLDER.</p>
        <h2>Liability</h2>
        <p>PLACEHOLDER.</p>
        <h2>Termination</h2>
        <p>PLACEHOLDER.</p>
      </div>
    </section>
  );
}
