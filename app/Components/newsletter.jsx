"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

export default function NewsletterSection() {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mx-auto max-w-6xl bg-white rounded-[2rem] p-10 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-blue-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 border border-blue-100 bg-blue-50 px-4 py-1.5 rounded-full">
            Updates
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 leading-[1.1]">
            Subscribe To Our <br />
            <span className="text-blue-600">Newsletter!</span>
          </h3>
        </div>

        {/* Right Input Area */}
        <div className="w-full lg:w-[500px]">
          <p className="text-slate-500 text-sm mb-6 text-center lg:text-left leading-relaxed">
            Get notified about new product features, industry news, and webinars.
          </p>
          
          <form className="relative flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-14 pl-12 pr-6 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-sm font-medium text-slate-800"
              />
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-8 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-2 font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition-colors shrink-0"
            >
              Subscribe <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}