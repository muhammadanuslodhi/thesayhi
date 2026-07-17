"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const aboutHeroData = {
  badge: "🚀 Pricing TheSayHi",
  heading: "Plans built to scale with  ",
  headingHighlight: "your revenue.",
  description:
    "Only pay for what you use. Every plan includes real human specialists — no scripts, no bots.",
  cta: {
    label: "Book a Demo",
    href: "/contact",
  },
};

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Decor - dot grid, same as Hero */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      <div className="absolute left-1/2 -top-32 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-200/30 to-sky-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-xs font-medium text-blue-700 backdrop-blur-sm">
            <span>{aboutHeroData.badge}</span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl text-slate-900 tracking-tight">
            {aboutHeroData.heading}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-500">
              {aboutHeroData.headingHighlight}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
            {aboutHeroData.description}
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={aboutHeroData.cta.href}
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              {aboutHeroData.cta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}