import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allBlogPosts } from 'contentlayer/generated';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { RelatedContent } from '@/components/common/RelatedContent';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { blogPostingSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams() {
  return allBlogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const doc = allBlogPosts.find((p) => p.slug === params.slug);
  if (!doc) return {};
  return buildMetadata({
    title: doc.metaTitle,
    description: doc.metaDescription,
    path: doc.url,
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const doc = allBlogPosts.find((p) => p.slug === params.slug);
  if (!doc) notFound();
  const MDX = useMDXComponent(doc.body.code);

  const related = allBlogPosts
    .filter((p) => p.slug !== doc.slug)
    .slice(0, 3);

  return (
    <>
      <SchemaOrg
        schema={[
          blogPostingSchema({
            title: doc.title,
            description: doc.metaDescription,
            url: doc.url,
            datePublished: doc.publishedAt,
            author: doc.author,
            authorRole: doc.authorRole,
          }),
        ]}
      />

      {/* CONTENT VIA MDX FILES IN /content/blog/ — ASSIGN TO CONTENT TEAM */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        <header>
          <span className="bg-brand-purple text-white text-[10px] uppercase tracking-widest font-medium px-2 py-1">
            {doc.category}
          </span>
          <h1 className="font-heading text-3xl md:text-5xl mt-4 leading-tight">
            {doc.title}
          </h1>
          <div className="mt-6 flex items-center gap-4 border-t border-b border-brand-purple/20 py-4">
            <div className="w-10 h-10 bg-brand-purple text-white flex items-center justify-center font-heading rounded-sm">
              {doc.author.split(' ').map((p) => p[0]).join('').slice(0, 2)}
            </div>
            <div className="flex-1 text-sm font-body">
              <p className="text-white">{doc.author}</p>
              <p className="text-white/60">{doc.authorRole}</p>
            </div>
            <span className="text-xs text-white/50 font-mono">{doc.readTime}</span>
          </div>
        </header>

        <div className="prose-implenix mt-10">
          <MDX components={mdxComponents} />
        </div>

        <aside className="mt-12 border border-brand-purple/30 bg-black p-6">
          <p className="font-heading text-xl text-white">
            Want this working in your business?
          </p>
          <p className="mt-2 font-body text-sm text-white/70">
            Book a demo and we will deploy it against your live business
            profile.
          </p>
          <Link
            href="/contact"
            data-cta-location="blog-inline-cta"
            data-cta-type="primary"
            className="mt-4 inline-flex bg-brand-purple text-white font-medium px-5 py-3 rounded-sm hover:opacity-90"
          >
            Book a demo
          </Link>
        </aside>

        {related.length > 0 && (
          <RelatedContent
            topic="More from the blog"
            type="blog"
            links={related.map((r) => ({ href: r.url, label: r.title }))}
          />
        )}
      </article>
    </>
  );
}
