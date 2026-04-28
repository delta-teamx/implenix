import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/common/Badge';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 grid-bg">
      <div className="max-w-xl w-full border border-brand-purple/20 bg-black p-10 flex flex-col gap-6">
        <Badge label="404 · Not found" variant="purple" />
        <h1 className="font-heading text-6xl md:text-7xl text-brand-purple leading-none">
          404
        </h1>
        <p className="text-white/80 font-body text-lg leading-relaxed">
          The page you are looking for does not exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
          >
            Back to Implenix <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-brand-cyan text-brand-cyan font-medium px-6 py-3 rounded-sm hover:bg-brand-cyan/10"
          >
            Talk to us
          </Link>
        </div>
      </div>
    </div>
  );
}
