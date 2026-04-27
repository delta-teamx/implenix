import type { Metadata } from 'next';
import { allResources } from 'contentlayer/generated';
import { buildMetadata } from '@/lib/seo';
import { ResourcesClient, type ResourceItem } from './ResourcesClient';

export const metadata: Metadata = buildMetadata({
  title: 'Resources — Guides, Playbooks, and Voice AI Glossary | Implenix',
  description:
    'Long-form guides, deployment playbooks, and a working glossary for anyone implementing voice AI in a local business.',
  path: '/resources',
});

export default function ResourcesPage() {
  const guides: ResourceItem[] = allResources
    .filter((r) => r.kind === 'guide')
    .map((r) => ({
      url: r.url,
      kind: r.kind,
      title: r.title,
      description: r.description,
    }));
  const playbooks: ResourceItem[] = allResources
    .filter((r) => r.kind === 'playbook')
    .map((r) => ({
      url: r.url,
      kind: r.kind,
      title: r.title,
      description: r.description,
    }));

  return (
    <>
      <section className="grid-bg">
        <div className="max-w-content mx-auto px-6 py-20 md:py-24">
          <span className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
            [ resources // hub ]
          </span>
          <h1 className="font-heading text-4xl md:text-6xl mt-4">Resources</h1>
          <p className="mt-4 font-body text-white/75 max-w-2xl">
            Long-form guides, deployment playbooks, and a working glossary for
            anyone implementing voice AI in a local business.
          </p>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <ResourcesClient guides={guides} playbooks={playbooks} />
      </section>
    </>
  );
}
