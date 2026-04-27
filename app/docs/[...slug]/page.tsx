import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allDocs } from 'contentlayer/generated';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { techArticleSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string[] };

export function generateStaticParams() {
  return allDocs.map((d) => ({ slug: d.slug.split('/') }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const slug = params.slug.join('/');
  const doc = allDocs.find((d) => d.slug === slug);
  if (!doc) return {};
  return buildMetadata({
    title: `${doc.title} — Implenix Docs`,
    description: doc.description,
    path: `/docs/${slug}`,
  });
}

export default function DocPage({ params }: { params: Params }) {
  const slug = params.slug.join('/');
  const doc = allDocs.find((d) => d.slug === slug);
  if (!doc) notFound();
  const MDX = useMDXComponent(doc.body.code);
  return (
    <>
      <SchemaOrg
        schema={[
          techArticleSchema({
            title: doc.title,
            description: doc.description,
            url: doc.url,
          }),
        ]}
      />
      <div className="text-xs uppercase tracking-widest text-brand-cyan font-mono">
        [ docs // {doc.section.toLowerCase()} ]
      </div>
      <div className="prose-implenix">
        <MDX components={mdxComponents} />
      </div>
    </>
  );
}
