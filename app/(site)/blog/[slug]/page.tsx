import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { useMDXComponent } from 'next-contentlayer2/hooks';
import { allBlogPosts } from 'contentlayer/generated';
import { mdxComponents } from '@/components/docs/MdxComponents';
import { Badge } from '@/components/common/Badge';
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

  const initials = doc.author
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

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
      <section className="grid-bg border-b border-brand-purple/15">
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-brand-cyan font-mono mb-8 hover:opacity-80"
          >
            <ArrowLeft size={12} /> All posts
          </Link>
          <Badge label={doc.category} variant="purple" />
          <h1 className="font-heading text-3xl md:text-5xl mt-5 leading-[1.08]">
            {doc.title}
          </h1>
          <p className="mt-5 font-body text-white/75 text-lg leading-relaxed">
            {doc.description}
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <header className="flex items-center gap-4 border-y border-brand-purple/20 py-5">
          <div className="w-11 h-11 bg-brand-purple text-white flex items-center justify-center font-heading rounded-sm">
            {initials}
          </div>
          <div className="flex-1 text-sm font-body">
            <p className="text-white">{doc.author}</p>
            <p className="text-white/55 text-xs">{doc.authorRole}</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-white/55 uppercase tracking-widest">
            <span className="flex items-center gap-1.5">
              <Calendar size={12} />
              {new Date(doc.publishedAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{doc.readTime}</span>
          </div>
        </header>

        <div className="prose-implenix mt-12">
          <MDX components={mdxComponents} />
        </div>

        <aside className="mt-16 border border-brand-purple/30 bg-black p-6 md:p-8 grid sm:grid-cols-[1fr_auto] gap-5 items-center">
          <div>
            <Badge label="Want this in your business?" variant="cyan" />
            <p className="font-heading text-2xl text-white mt-3 leading-snug">
              Book a 15-minute Implenix demo.
            </p>
          </div>
          <Link
            href="/contact"
            data-cta-location="blog-inline-cta"
            data-cta-type="primary"
            className="inline-flex items-center gap-2 bg-brand-purple text-white font-medium px-5 py-3 rounded-sm hover:opacity-90 self-start"
          >
            Book a demo <ArrowRight size={16} />
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
