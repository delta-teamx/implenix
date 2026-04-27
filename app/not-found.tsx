import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <span className="font-mono text-xs uppercase tracking-widest text-brand-cyan">
          [ 404 // not found ]
        </span>
        <h1 className="font-heading text-5xl md:text-7xl mt-4 text-brand-purple">
          404
        </h1>
        <p className="mt-4 text-white/80 font-body">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-brand-purple text-white font-medium px-6 py-3 rounded-sm hover:opacity-90"
        >
          Back to Implenix
        </Link>
      </div>
    </div>
  );
}
