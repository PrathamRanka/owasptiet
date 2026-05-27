"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto flex max-w-xl flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/5 p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Something went wrong</p>
        <h1 className="text-3xl font-semibold">We could not load this page.</h1>
        <p className="text-sm leading-6 text-white/70">
          Try again. If the problem persists, it is likely a client-side rendering issue or an upstream asset failed to load.
        </p>
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/90"
        >
          Retry
        </button>
      </div>
    </div>
  );
}
