"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Platform() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-bold text-blue-600 uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span> Platform
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] max-w-2xl">
            A workspace built for teams that <span className="text-blue-600">convert.</span>
          </h2>
        </div>

        <div className="space-y-32">
          {/* Feature 1: Conversation Inbox */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Conversation Inbox</div>
              <h3 className="text-4xl font-black text-slate-900 mb-6">Every conversation in one thread.</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-md">Web chat, SMS, and email flow into a unified inbox with the full customer history at a glance.</p>
              <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group flex items-center gap-2 px-6 py-3 font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
>
  Learn more
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</motion.button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex gap-1.5 mb-4 px-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
              <div className="flex gap-4 h-64">
                <div className="w-1/3 space-y-2 border-r border-slate-100 pr-2">
                  {["Sarah", "Devon", "Priya", "Marc", "Amy"].map((name) => (
                    <div key={name} className="p-2 bg-slate-50 rounded-lg border border-slate-100">
                      <p className="text-[10px] font-bold text-slate-900">{name}</p>
                      <p className="text-[9px] text-slate-400">Question about pricing</p>
                    </div>
                  ))}
                </div>
                <div className="w-2/3 p-4 bg-slate-50 rounded-xl">
                  <p className="text-[10px] font-bold text-slate-400 mb-4">Thread · Sarah Martinez</p>
                  <div className="w-4/5 h-8 bg-slate-100 rounded-lg mb-4"></div>
                  <div className="w-3/5 h-8 bg-blue-600 rounded-lg ml-auto"></div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Feature 2: Lead Pipeline */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Lead Pipeline</div>
              <h3 className="text-4xl font-black text-slate-900 mb-6">See every prospect move to close.</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-md">Kanban-style pipeline with real-time stage updates, custom fields, and CRM sync.</p>
              <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group flex items-center gap-2 px-6 py-3 font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
>
  Learn more
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</motion.button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-1 lg:order-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
               <div className="flex gap-1.5 mb-4 px-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
               <div className="flex gap-3 h-64">
                 {["NEW", "QUALIFIED", "MEETING"].map((header) => (
                   <div key={header} className="w-1/3 flex flex-col gap-2">
                     <p className="text-[9px] font-bold text-slate-400 uppercase">{header}</p>
                     {[1,2,3].map(i => <div key={i} className="h-16 bg-slate-50 rounded-lg border border-slate-100 p-2"><div className="w-12 h-2 bg-slate-200 rounded mb-1"/><div className="w-8 h-1.5 bg-slate-100 rounded"/></div>)}
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
          {/* Feature 3: Scheduling */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Scheduling</div>
              <h3 className="text-4xl font-black text-slate-900 mb-6">The calendar your prospects actually use.</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-md">Round-robin, team, and single-user booking with reminders and automatic time zones.</p>
             <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group flex items-center gap-2 px-6 py-3 font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
>
  Learn more
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</motion.button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex gap-1.5 mb-4 px-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
              <div className="grid grid-cols-7 gap-1">
                {[...Array(31)].map((_, i) => (
                  <div key={i} className={`h-10 rounded-lg border border-slate-100 flex items-center justify-center text-[10px] ${[8, 12, 19, 22, 27].includes(i) ? "bg-blue-600 text-white" : "bg-slate-50"}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Feature 4: Analytics */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1">
              <div className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">Analytics</div>
              <h3 className="text-4xl font-black text-slate-900 mb-6">The numbers that move revenue.</h3>
              <p className="text-slate-500 text-lg mb-8 max-w-md">Conversion, response time, source attribution, and team performance — all live.</p>
              <motion.button 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.98 }}
  className="group flex items-center gap-2 px-6 py-3 font-bold text-blue-600 border-2 border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
>
  Learn more
  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
</motion.button>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="order-1 lg:order-2 bg-white p-4 rounded-2xl border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="flex gap-1.5 mb-4 px-2"><div className="w-2.5 h-2.5 rounded-full bg-red-400"/><div className="w-2.5 h-2.5 rounded-full bg-yellow-400"/><div className="w-2.5 h-2.5 rounded-full bg-green-400"/></div>
              <div className="flex gap-4">
                {[ { label: "CONVERSION", val: "47%" }, { label: "RESPONSE", val: "9.8s" }, { label: "BOOKED", val: "1,204" } ].map((item) => (
                  <div key={item.label} className="w-1/3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <p className="text-[9px] font-bold text-slate-400 mb-2">{item.label}</p>
                    <p className="text-xl font-black text-slate-900 mb-4">{item.val}</p>
                    <div className="h-12 w-full bg-blue-50/50 rounded-b-lg border-t-2 border-blue-200"></div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}