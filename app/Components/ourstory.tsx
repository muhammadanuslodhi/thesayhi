"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "3400+", label: "Companies served" },
  { value: "12M+", label: "Conversations handled" },
  { value: "47%", label: "Avg. conversion lift" },
  { value: "4.9/5", label: "Customer rating" },
];

export default function OurStory() {
  return (
    <section className="py-20 md:py-28">
      {/* Container wrapper added here */}
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-700">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-800 to-sky-500"></span>
              Our story
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Founded to bring the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-500">
                human back
              </span>{" "}
              to the web.
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              We started TheSayHi after seeing thousands of high-intent
              visitors bounce because no one was there to say hello. Websites
              had gotten faster, prettier, and smarter — but colder. We set out
              to fix that.
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Today, thousands of growing businesses use TheSayHi to turn every
              visit into a warm, qualified conversation — powered by real
              people.
            </p>
          </motion.div>

          {/* Right Column - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white border border-slate-100 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-500">
                    <span>{stat.value}</span>
                  </div>
                  <div className="mt-2 text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}