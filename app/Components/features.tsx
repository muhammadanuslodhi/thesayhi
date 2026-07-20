"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { MessageSquare, Target, Calendar, ClipboardList, Inbox, RefreshCw, BarChart3, Users } from "lucide-react";

const PRODUCTS = [
  { id: "prod-live-chat", title: "Website Live Chat", desc: "Real-time engagement with automated triggers.", icon: MessageSquare },
  { id: "prod-lead-qual", title: "Lead Qualification", desc: "Automatically score and filter high-intent prospects.", icon: Target },
  { id: "prod-app-schedule", title: "Appointment Scheduling", desc: "Sync calendars and eliminate back-and-forth emails.", icon: Calendar },
  { id: "prod-lead-mgmt", title: "Lead Management", desc: "Centralize your pipeline with robust tracking.", icon: ClipboardList },
  { id: "prod-conv-inbox", title: "Conversation Inbox", desc: "Unify all communication channels in one place.", icon: Inbox },
  { id: "prod-crm-int", title: "CRM Integrations", desc: "Seamless data sync with your tech stack.", icon: RefreshCw },
  { id: "prod-analytics", title: "Analytics Dashboard", desc: "Data-driven insights with visual reporting.", icon: BarChart3 },
  { id: "prod-agent-ws", title: "Human Agent Workspace", desc: "High-performance environment for your team.", icon: Users },
];

export default function Productmain() {
  return (
<section className="py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {PRODUCTS.map((product, i) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          className="group flex flex-col bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:border-blue-200 hover:shadow-md transition-all duration-300"
        >
          {/* Icon Header */}
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <product.icon className="w-6 h-6" />
          </div>

          {/* Content */}
          <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
            {product.title}
          </h3>
          <p className="mt-3 text-slate-600 leading-relaxed flex-grow">
            {product.desc}
          </p>

          {/* Action */}
          <div className="mt-8 pt-6 border-t border-slate-100">
  <Link 
    href="/pricing#pricing" 
    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
  >
    Explore pricing
    <span className="text-lg transition-transform group-hover:translate-x-1" aria-hidden="true">
      →
    </span>
  </Link>
</div>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}