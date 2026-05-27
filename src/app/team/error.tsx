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
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Team page failed to load</p>
        <h1 className="text-3xl font-semibold">The team route could not render.</h1>
        <p className="text-sm leading-6 text-white/70">
          Refresh to try again. If this repeats, check the latest team data or a client-side animation failure.
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
