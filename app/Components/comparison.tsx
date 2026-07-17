"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { name: "Website Live Chat", values: [true, true, true, true] },
  { name: "Lead capture", values: [true, true, true, true] },
  { name: "Email notifications", values: [true, true, true, true] },
  { name: "Standard analytics", values: [true, true, true, true] },
  { name: "Appointment scheduling", values: [false, true, true, true] },
  { name: "Lead qualification flows", values: [false, true, true, true] },
  { name: "CRM integration", values: [false, true, true, true] },
  { name: "Multi-team routing", values: [false, false, true, true] },
  { name: "Advanced analytics", values: [false, false, true, true] },
  { name: "SSO / SAML", values: [false, false, false, true] },
  { name: "Dedicated CSM", values: [false, false, false, true] },
];

export default function Comparison() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span> Full Comparison
          </div>
          <h2 className="text-5xl font-extrabold text-slate-900 tracking-tighter">Every feature, side by side.</h2>
        </div>

        {/* Responsive Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-100 text-left text-slate-900 font-bold text-sm">
                <th className="p-6">Feature</th>
                <th className="p-6 text-center">Starter</th>
                <th className="p-6 text-center">Growth</th>
                <th className="p-6 text-center">Business</th>
                <th className="p-6 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {features.map((feature, i) => (
                <motion.tr 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="hover:bg-slate-50 transition-colors"
                >
                  <td className="p-6 text-sm text-slate-700 font-medium">{feature.name}</td>
                  {feature.values.map((val, j) => (
                    <td key={j} className="p-6">
                      <div className="flex justify-center">
                        {val ? (
                          <motion.div 
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center"
                          >
                            <Check className="w-3.5 h-3.5 text-white" />
                          </motion.div>
                        ) : (
                          <X className="w-4 h-4 text-slate-300" />
                        )}
                      </div>
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}