"use client";

import { motion } from "framer-motion";
import { Users, MessageSquare, ClipboardCheck, CalendarDays, Plug, Inbox, TrendingUp } from "lucide-react";

const STEPS = [
  { icon: Users, title: "Visitor arrives", desc: "Warm greeting the moment they land." },
  { icon: MessageSquare, title: "Conversation starts", desc: "Real human, in your brand voice." },
  { icon: ClipboardCheck, title: "Lead qualified", desc: "Custom questions capture intent." },
  { icon: CalendarDays, title: "Appointment booked", desc: "Right in the chat window." },
  { icon: Plug, title: "Routed to team", desc: "Assigned by rules you control." },
  { icon: Inbox, title: "Follow-up", desc: "Notes, transcripts, next steps." },
  { icon: TrendingUp, title: "Customer won", desc: "Closed-loop attribution." },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0b172a] py-24 px-6 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000,transparent)]"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-blue-900 bg-blue-950/30 px-3 py-1 text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse"></span> How it works
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.1]">
            From <span className="text-blue-500">first hello</span> to closed<br />customer.
          </h2>
          <p className="text-slate-400 mt-6 max-w-lg text-lg">
            A single, coordinated workflow — orchestrated by real humans, powered by a purpose-built platform.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-y-10 gap-x-4">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group"
            >
              {/* Connector Line (visible on desktop) */}
              {i < STEPS.length - 1 && (
                <div className="hidden xl:block absolute top-6 left-1/2 w-full h-px bg-blue-900/50 -z-10"></div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-6 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-2">Step 0{i + 1}</div>
                <h3 className="text-white font-bold text-sm mb-2">{step.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-[140px]">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}