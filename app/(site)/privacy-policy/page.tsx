import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How Implenix collects, uses, and protects information.',
  path: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-heading text-4xl md:text-5xl">Privacy Policy</h1>
      {/* REPLACE WITH LEGAL COPY REVIEWED BY COUNSEL */}
      <div className="prose-implenix mt-10">
        <p>
          PLACEHOLDER LEGAL COPY — replace with the privacy policy reviewed by
          counsel. Until that copy is finalized, this page should not be linked
          from production-facing pages.
        </p>
        <h2>Information we collect</h2>
        <p>PLACEHOLDER.</p>
        <h2>How we use information</h2>
        <p>PLACEHOLDER.</p>
        <h2>Data retention</h2>
        <p>PLACEHOLDER.</p>
        <h2>Your rights</h2>
        <p>PLACEHOLDER.</p>
        <h2>Contact</h2>
        <p>PLACEHOLDER.</p>
      </div>
    </section>
  );
}
