"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, Target, Calendar, ClipboardList, Inbox, RefreshCw, BarChart3, Users } from "lucide-react";

// Your defined products array
const products = [
  { 
    id: "website-live-chat", 
    title: "Website Live Chat", 
    desc: "Capture every visitor the moment they land on your page with our intelligent, real-time chat widget. Features automated greeting triggers and instant response capabilities.", 
    icon: MessageSquare 
  },
  { 
    id: "lead-qualification", 
    title: "Lead Qualification", 
    desc: "Automatically score and filter incoming leads based on custom behavioral parameters. Filter out low-intent users so your team focuses exclusively on high-value prospects.", 
    icon: Target 
  },
  { 
    id: "appointment-scheduling", 
    title: "Appointment Scheduling", 
    desc: "Take the friction out of your sales cycle. Sync in real-time with team calendars, auto-generate meeting links, and send automatic reminders to maximize attendance.", 
    icon: Calendar 
  },
  { 
    id: "lead-management", 
    title: "Lead Management", 
    desc: "Gain complete visibility into your growth pipeline. Track, tag, and organize prospects in a centralized database to ensure every lead is nurtured effectively until closure.", 
    icon: ClipboardList 
  },
  { 
    id: "conversation-inbox", 
    title: "Conversation Inbox", 
    desc: "Eliminate platform hopping by unifying live chat, emails, and social media into one streamlined interface. Manage and assign inquiries from a single high-efficiency dashboard.", 
    icon: Inbox 
  },
  { 
    id: "crm-integrations", 
    title: "CRM Integrations", 
    desc: "Keep your customer data synchronized effortlessly. Connect seamlessly with your existing tech stack and automatically push lead interaction data to your primary database.", 
    icon: RefreshCw 
  },
  { 
    id: "analytics-dashboard", 
    title: "Analytics Dashboard", 
    desc: "Make data-driven decisions with a comprehensive view of business performance. Visualize key metrics to identify bottlenecks and optimize your strategy for maximum revenue.", 
    icon: BarChart3 
  },
  { 
    id: "human-agent-workspace", 
    title: "Human Agent Workspace", 
    desc: "Provide your team with the ultimate toolset for high-volume environments. Organizes lead history, quick-reply macros, and active conversations in a distraction-free layout.", 
    icon: Users 
  },
];

export default function Productmain() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              id={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group rounded-3xl border border-slate-100 p-8 shadow-[0_16px_40px_rgba(15,23,42,0.02)] hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 shadow-inner">
                <product.icon className="w-6 h-6" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">
                {product.title}
              </h3>
              <p className="text-[15px] text-slate-500 mb-8 leading-relaxed font-medium">
                {product.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                < Link  href="/pricing#pricing" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
                  View Pricing
                </ Link>
                <Link 
                href="/demo" 
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Book a Demo →
              </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}