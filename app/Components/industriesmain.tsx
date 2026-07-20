"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Scale, 
  Stethoscope, 
  Building, 
  ShieldCheck, 
  Home, 
  Megaphone, 
  GraduationCap, 
  PiggyBank 
} from "lucide-react";

const industries = [
  {id:"law-firms",  icon: Scale, title: "Law Firms", desc: "Automate lead intake, client onboarding, and appointment scheduling to maximize your firm's billable hours." },
  { id:"medical", icon: Stethoscope, title: "Medical Practices", desc: "Improve patient engagement with automated appointment reminders and secure intake workflows for your clinic." },
  { id:"real-estate", icon: Building, title: "Real Estate", desc: "Capture property inquiries instantly, qualify potential buyers, and schedule viewings to close deals faster." },
  { id:"insurance", icon: ShieldCheck, title: "Insurance", desc: "Streamline policy quote requests and automate routine communication for faster claims and coverage processing." },
  { id:"home-services", icon: Home, title: "Home Services", desc: "Dispatch teams rapidly by capturing urgent service requests and qualifying leads in real-time." },
  { id:"marketing-agencies", icon: Megaphone, title: "Marketing Agencies", desc: "Scale client growth with white-label conversation management tools designed for high-performance agencies." },
  { id:"education", icon: GraduationCap, title: "Education", desc: "Engage prospective students, manage enrollment inquiries, and schedule academic counseling with ease." },
  { id:"financial-services", icon: PiggyBank, title: "Financial Services", desc: "Drive lead nurturing and simplify the booking process for financial consultations and advisory services." },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              id={industry.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl border border-slate-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.02)] hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <industry.icon className="w-6 h-6" strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {industry.title}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-6">
                {industry.desc}
              </p>

              {/* Call to Action */}
              <Link 
                href="/demo" 
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                Book a Demo →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}