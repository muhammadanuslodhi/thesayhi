"use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const stats = [
  { value: "30 days", label: "Average payback" },
  { value: "3.2x", label: "Pipeline within 90 days" },
  { value: "+47%", label: "Lead conversions" },
  { value: "9.8s", label: "Response time" },
];

export default function ROISection() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span> Return on investment
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter mb-6 leading-tight">
            Every dollar spent, <br />
            <span className="text-blue-600">accounted for.</span>
          </h2>
          <p className="text-slate-600 text-lg mb-8 max-w-md">
            The average customer sees payback within 30 days. Most cross break-even by week two and double pipeline within the first quarter.
          </p>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-105">
            <Calendar className="w-4 h-4" /> Talk to Sales
          </button>
        </motion.div>

        {/* Right Stats Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-blue-600 p-8 rounded-3xl text-white shadow-xl shadow-blue-600/20"
            >
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-blue-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}