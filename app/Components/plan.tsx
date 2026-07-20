"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  { name: "Starter", price: "$45", desc: "For small teams", features: ["Website Live Chat", "Basic lead capture", "Email notifications", "Standard analytics"], highlight: false },
  { name: "Growth", price: "$59", desc: "Most popular", features: ["Everything in Starter", "Lead qualification flows", "Appointment scheduling", "CRM integration"], highlight: true },
  { name: "Business", price: "$65", desc: "For scaling teams", features: ["Everything in Growth", "Multi-team routing", "Advanced analytics", "Priority support"], highlight: false },
  { name: "Enterprise", price: "Custom", desc: "Enterprise-grade", features: ["Everything in Business", "SSO / SAML", "Dedicated CSM", "SLA & compliance"], highlight: false },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-slate-50 px-6" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-blue-100 bg-white px-4 py-1.5 rounded-full shadow-sm">
            Pricing
          </span>
          <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tighter mb-6">
            Plans start as low as <span className="text-blue-600">$45/month</span>
          </h2>
          <button className="text-blue-600 font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
            Full comparison <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-3xl border ${
                plan.highlight 
                  ? "bg-white border-blue-600 shadow-2xl shadow-blue-600/10 scale-105" 
                  : "bg-white border-slate-200 shadow-sm hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                  Recommended
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-400 font-medium">/mo</span>}
                </div>
                <p className="text-slate-500 text-sm mt-2">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-blue-600" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                plan.highlight 
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30" 
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}>
                Book a Demo
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}