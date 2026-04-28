import type { Metadata } from 'next';
import { allResources } from 'contentlayer/generated';
import { Badge } from '@/components/common/Badge';
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
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
          <div className="max-w-3xl flex flex-col gap-5">
            <Badge label="Resources · Hub" variant="cyan" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-[1.04]">
              Guides, playbooks, and a working{' '}
              <span className="text-brand-cyan">voice-AI glossary</span>.
            </h1>
            <p className="font-body text-white/75 text-lg max-w-2xl leading-relaxed">
              Long-form articles, deployment playbooks, and a working glossary
              for anyone implementing voice AI in a local business.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black border-t border-brand-purple/20">
        <ResourcesClient guides={guides} playbooks={playbooks} />
      </section>
    </>
  );
}
