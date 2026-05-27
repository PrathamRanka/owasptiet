export default function Loading() {
  return (
    <div className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="mx-auto h-12 w-64 rounded-full bg-white/10 animate-pulse" />
        <div className="mx-auto h-14 w-[360px] rounded-full bg-white/10 animate-pulse" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-72 rounded-2xl bg-white/10 animate-pulse" />
          <div className="h-72 rounded-2xl bg-white/10 animate-pulse" />
          <div className="h-72 rounded-2xl bg-white/10 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
