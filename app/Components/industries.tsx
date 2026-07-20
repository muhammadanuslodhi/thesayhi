"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Scale, 
  Home, 
  Landmark, 
  GraduationCap, 
  ShieldCheck, 
  Wrench, 
  Car, 
  Cpu 
} from "lucide-react";

const industries = [
  { icon: HeartPulse, title: "Healthcare", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Scale, title: "Legal", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Home, title: "Real Estate", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Landmark, title: "Finance", desc: "Engage, qualify, and schedule with confidence." },
  { icon: GraduationCap, title: "Education", desc: "Engage, qualify, and schedule with confidence." },
  { icon: ShieldCheck, title: "Insurance", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Wrench, title: "Home Services", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Car, title: "Automotive", desc: "Engage, qualify, and schedule with confidence." },
  { icon: Cpu, title: "Technology", desc: "Engage, qualify, and schedule with confidence." },
];

export default function IndustriesSection() {
  return (
   <section className="py-24 bg-slate-50 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Header with Animation */}
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3 block">
        Industries we serve
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight max-w-xl">
        Purpose-built for how your business earns trust
      </h2>
    </motion.div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {industries.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
        >
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <item.icon className="w-6 h-6" />
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed flex-grow mb-6">
            {item.desc}
          </p>

          <Link 
            href="/industries" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
          >
            Learn more
            <span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}