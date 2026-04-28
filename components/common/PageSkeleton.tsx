// Shared loading skeleton used by route-level loading.tsx files.
// Mirrors the standard hero block + content rhythm so the layout is stable.
export function PageSkeleton() {
  return (
    <div className="grid-bg" aria-busy="true" aria-live="polite">
      <div className="max-w-content mx-auto px-6 pt-24 pb-20 md:pt-32 md:pb-24">
        <div className="max-w-3xl flex flex-col gap-5">
          <div className="h-6 w-40 border border-brand-purple/30 bg-black/50 animate-pulse" />
          <div className="h-12 w-full bg-black/40 border border-brand-purple/15 animate-pulse" />
          <div className="h-12 w-3/4 bg-black/40 border border-brand-purple/15 animate-pulse" />
          <div className="h-5 w-2/3 bg-black/30 border border-brand-purple/10 animate-pulse mt-3" />
          <div className="h-5 w-1/2 bg-black/30 border border-brand-purple/10 animate-pulse" />
        </div>
      </div>
      <div className="border-t border-brand-purple/15">
        <div className="max-w-content mx-auto px-6 py-20 grid md:grid-cols-3 gap-5">
          <div className="h-40 bg-black/40 border border-brand-purple/15 animate-pulse" />
          <div className="h-40 bg-black/40 border border-brand-purple/15 animate-pulse" />
          <div className="h-40 bg-black/40 border border-brand-purple/15 animate-pulse" />
        </div>
      </div>
      <span className="sr-only">Loading Implenix content…</span>
    </div>
  );
}
