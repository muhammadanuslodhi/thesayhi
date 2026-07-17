// app/Components/AboutHero.tsx

import { Calendar } from "lucide-react";

const aboutHeroData = {
  badge: "About",
  heading: "Real humans, building the future of ",
  headingHighlight: "customer engagement.",
  description:
    "TheSayHi was built on a simple belief: every visitor deserves a real conversation. Everything we do serves that idea.",
  cta: {
    label: "Book a Demo",
    href: "/contact",
  },
};

export default function AboutHero() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      {/* Blobs */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand/20 blur-3xl animate-blob"></div>
        <div
          className="absolute -bottom-32 -right-16 h-[32rem] w-[32rem] rounded-full bg-brand-2/25 blur-3xl animate-blob"
          style={{ animationDelay: "-6s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl animate-blob"
          style={{ animationDelay: "-12s" }}
        ></div>
      </div>

      {/* Grid background */}
      <div
        className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        aria-hidden="true"
      ></div>

      {/* Content */}
      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand">
            <span className="h-1.5 w-1.5 rounded-full gradient-brand"></span>
            {aboutHeroData.badge}
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-navy leading-[1.05]">
            {aboutHeroData.heading}
            <span className="text-gradient-brand">
              {aboutHeroData.headingHighlight}
            </span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            {aboutHeroData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            
              href={aboutHeroData.cta.href}
              className="gradient-brand inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-premium hover:shadow-glow transition-all"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {aboutHeroData.cta.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}