import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { DocsSidebar } from './DocsSidebar';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-dark">
      <header className="border-b border-brand-purple/20 bg-brand-dark sticky top-0 z-30">
        <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/docs/getting-started/quick-start"
              className="font-heading text-brand-purple text-xl"
            >
              Implenix
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/45 border border-brand-purple/30 px-2 py-0.5">
              Docs
            </span>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-white/85 hover:text-brand-cyan font-body"
          >
            <ArrowLeft size={14} /> Back to site
          </Link>
        </div>
      </header>
      <div className="max-w-content mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-10 py-10">
        <aside className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto pb-10">
          <DocsSidebar />
        </aside>
        <article className="min-w-0 max-w-3xl">{children}</article>
      </div>
    </div>
  );
}
