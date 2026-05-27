export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="h-10 w-40 rounded-full bg-white/10 animate-pulse" />
        <div className="grid gap-4 md:grid-cols-2">
          <div className="h-[320px] rounded-3xl bg-white/10 animate-pulse" />
          <div className="h-[320px] rounded-3xl bg-white/10 animate-pulse" />
        </div>
        <div className="h-[240px] rounded-3xl bg-white/10 animate-pulse" />
      </div>
    </div>
  );
}
