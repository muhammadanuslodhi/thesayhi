"use client";

import { motion } from "framer-motion";
import { Bot, Users, Building2, Zap, Target, CalendarDays } from "lucide-react";

const FEATURES = [
  { title: "Smart Chat Automation", desc: "Handles first contact conversations so our team can focus on qualified leads.", icon: Bot },
  { title: "Human Chat Takeover", desc: "Connects customers with the right agent when it matters most.", icon: Users },
  { title: "Multi-Tenant System", desc: "Centralize management of multiple clients, brands, and teams in one place.", icon: Building2 },
  { title: "Real-Time Messaging", desc: "Instant chat delivery with reliable performance, even during high conversation volumes.", icon: Zap },
  { title: "Smart Lead Scoring", desc: "Identify high-quality prospects and focus on the leads most likely to convert.", icon: Target },
  { title: "Appointment Booking", desc: "Turn conversations into scheduled meetings with seamless calendar and CRM integrations.", icon: CalendarDays },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50/50 px-3.5 py-1 text-xs font-bold text-blue-600 uppercase tracking-wider">
            Features
          </span>
          <h2 className="mt-4 text-[36px] md:text-[48px] font-black tracking-tight text-slate-900 leading-[1.1]">
            Everything clicks into place,  
            <span className="bg-gradient-to-r from-blue-800 to-sky-500 bg-clip-text text-transparent"> right out of the box</span>
          </h2>
          <p className="mt-4 text-[15px] sm:text-[16px] text-slate-500 font-normal max-w-lg mx-auto leading-relaxed">
            <b className="text-blue-600 font-semibold">TheSayHi</b> brings together the tools your team requires to turn website conversations into actual business results.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl bg-white border border-slate-100 p-7 shadow-[0_16px_40px_rgba(15,23,42,0.02)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.06)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="relative grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/10">
                <feature.icon className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <h3 className="relative mt-5 text-[17px] font-bold text-slate-900 tracking-tight">{feature.title}</h3>
              <p className="relative mt-2 text-xs sm:text-[13px] text-slate-500 leading-relaxed font-medium">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}