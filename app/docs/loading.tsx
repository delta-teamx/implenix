export default function Loading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-live="polite">
      <div className="h-5 w-40 border border-brand-purple/20 bg-black/40 animate-pulse" />
      <div className="h-10 w-full bg-black/40 border border-brand-purple/15 animate-pulse" />
      <div className="h-5 w-5/6 bg-black/30 border border-brand-purple/10 animate-pulse" />
      <div className="h-5 w-4/6 bg-black/30 border border-brand-purple/10 animate-pulse" />
      <div className="h-5 w-3/4 bg-black/30 border border-brand-purple/10 animate-pulse" />
      <span className="sr-only">Loading documentation…</span>
    </div>
  );
}
