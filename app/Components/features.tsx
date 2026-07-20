"use client";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-3xl border border-slate-100 p-6 shadow-[0_16px_40px_rgba(15,23,42,0.02)] hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <product.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{product.title}</h3>
              <p className="mt-2 text-sm text-slate-500 mb-6">{product.desc}</p>
              
              <div className="flex flex-col gap-2">
                <button className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800">
                  View Pricing →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}