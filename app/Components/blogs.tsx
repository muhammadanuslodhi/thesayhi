"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "PLAYBOOK",
    readTime: "8 MIN READ",
    title: "The playbook for engaging every visitor in under 10 seconds",
  },
  {
    category: "INDUSTRY",
    readTime: "6 MIN READ",
    title: "How law firms turn website traffic into signed clients",
  },
  {
    category: "INSIGHT",
    readTime: "5 MIN READ",
    title: "Why the best sales teams don't use bots to greet buyers",
  },
];

export default function ArticlesSection() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-block text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-blue-200 bg-white px-4 py-1.5 rounded-full shadow-sm"
            >
              Latest Articles
            </motion.span>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter">
              Growth ideas, straight from the <span className="text-blue-600">front lines.</span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-bold text-slate-900 hover:text-blue-600 transition-all border-b-2 border-slate-900 hover:border-blue-600 pb-1 group">
            All <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article */}
          <motion.div 
            whileHover={{ y: -8 }}
            className="lg:col-span-7 bg-blue-600 rounded-3xl p-10 text-white flex flex-col justify-end min-h-[450px] shadow-xl shadow-blue-500/20 relative overflow-hidden"
          >
            {/* Subtle overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-700/50 to-transparent" />
            
            <div className="relative z-10">
              <p className="font-bold text-[10px] uppercase tracking-[0.2em] mb-4 opacity-80">
                {articles[0].category} • {articles[0].readTime}
              </p>
              <h3 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8 tracking-tight">
                {articles[0].title}
              </h3>
              <button className="flex items-center gap-2 font-bold hover:gap-4 transition-all bg-white/10 px-6 py-3 rounded-xl w-fit backdrop-blur-sm">
                Read article <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Secondary Articles Stack */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {articles.slice(1).map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10, borderColor: "#2563eb" }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-3">
                    {article.category} • {article.readTime}
                  </p>
                  <h4 className="text-xl font-bold text-slate-900 mb-6 leading-snug tracking-tight">
                    {article.title}
                  </h4>
                </div>
                <button className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}