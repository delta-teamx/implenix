import Link from 'next/link';
import { DocsSidebar } from './DocsSidebar';

export function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-dark">
      <header className="border-b border-brand-purple/20 bg-brand-dark sticky top-0 z-30">
        <div className="max-w-content mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/docs/getting-started/quick-start" className="font-heading text-brand-purple text-xl">
            Implenix
          </Link>
          <Link
            href="/"
            className="text-sm text-white/80 hover:text-brand-cyan font-body"
          >
            Back to site
          </Link>
        </div>
      </header>
      <div className="max-w-content mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-10 py-10">
        <aside className="lg:sticky lg:top-20 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto pb-10">
          <DocsSidebar />
        </aside>
        <article className="min-w-0 max-w-3xl">
          {children}
        </article>
      </div>
    </div>
  );
}
