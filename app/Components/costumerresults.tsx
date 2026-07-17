"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CaseCard = ({ data, reversed = false }: { data: any; reversed?: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group flex flex-col lg:flex-row bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-lg shadow-slate-200/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 ${
        reversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Blue Panel with subtle gradient overlay */}
      <div className="bg-blue-600 p-10 text-white lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
        <div className="relative z-10">
          <p className="text-blue-200 font-bold text-[11px] uppercase tracking-[0.2em] mb-3">
            {data.category}
          </p>
          <h3 className="text-3xl font-extrabold tracking-tight">{data.client}</h3>
        </div>
        
        {/* Animated Stats Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-3 gap-4 mt-12 relative z-10"
        >
          {data.stats.map((s: any, i: number) => (
            <motion.div 
              key={`${data.client}-stat-${i}`}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
            >
              <p className="text-2xl font-black mb-1">{s.value}</p>
              <p className="text-blue-200 text-[10px] uppercase font-bold tracking-widest">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content Panel */}
      <div className="p-10 lg:p-14 lg:w-3/5 flex flex-col justify-center bg-white">
        <h4 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight leading-tight">
          {data.title}
        </h4>
        
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div className="space-y-3">
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">The Challenge</p>
            <p className="text-slate-600 text-sm leading-relaxed">{data.challenge}</p>
          </div>
          <div className="space-y-3">
            <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">The Result</p>
            <p className="text-slate-700 text-sm leading-relaxed font-medium">{data.result}</p>
          </div>
        </div>

        <button className="flex items-center gap-3 font-bold text-blue-600 hover:text-blue-800 transition-all text-sm group-hover:gap-4">
          Read the full story <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default function CaseStudiesSection() {
  const cases = [
    {
      category: "Real Estate",
      client: "Stellar Realty Group",
      title: "3.4x more booked showings in 90 days.",
      challenge: "Website visitors weren't converting into scheduled property tours fast enough.",
      result: "TheSayHi engaged every visitor and booked showings in-chat. Pipeline grew 340% quarter over quarter.",
      stats: [{ value: "+340%", label: "Booked" }, { value: "<10s", label: "Response" }, { value: "58%", label: "Convert" }],
    },
    {
      category: "Law Firms",
      client: "Ashfield Legal",
      title: "From 12 to 84 qualified consults per month.",
      challenge: "Missed calls and slow web replies were losing high-value case leads to competitors.",
      result: "Human agents qualified every visitor and routed cases by practice area. 7x more consults booked.",
      stats: [{ value: "+600%", label: "Qualified" }, { value: "24/7", label: "Coverage" }, { value: "4.9/5", label: "Rating" }],
    },
  ];

  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-20 gap-8">
          <div>
            <span className="inline-block text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-blue-100 bg-blue-50/50 px-4 py-1.5 rounded-full">
              Customer Success
            </span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
              Real teams. <span className="text-blue-600">Real revenue.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-colors border-b-2 border-slate-900 hover:border-blue-600 pb-1">
            Browse all case studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-16">
          {cases.map((data, i) => (
            <CaseCard key={`case-${i}`} data={data} reversed={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}