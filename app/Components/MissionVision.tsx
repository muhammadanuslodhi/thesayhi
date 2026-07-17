export default function MissionVision() {
  return (
    <section className="py-20 md:py-28 bg-[#0a1128] text-white relative overflow-hidden">
      {/* Grid background pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative grid md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Mission
          </span>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold">
            Give every visitor a real welcome.
          </h3>
          <p className="mt-4 text-white/60">
            We&apos;re building the infrastructure and the people to make sure
            no business ever misses a meaningful conversation with a customer.
          </p>
        </div>

        {/* Vision Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
            Vision
          </span>
          <h3 className="mt-4 text-3xl md:text-4xl font-bold">
            Every website, a warm front door.
          </h3>
          <p className="mt-4 text-white/60">
            A future where the digital experience is as human as the best
            in-person moments — everywhere, always on, for every visitor.
          </p>
        </div>
      </div>
    </section>
  );
}