"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
      <div className="absolute left-1/2 -top-32 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-200/30 to-sky-100/40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-2 text-xs font-medium text-blue-700 backdrop-blur-sm">
              <span>🚀 Accelerate growth with 24/7 Staffed Live Chat</span>
            </div>
            
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] md:text-6xl text-slate-900 tracking-tight">
              More conversations. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-500">More customers!</span>
            </h1>
            
            <p className="mt-6 max-w-xl text-lg text-slate-600 leading-relaxed">
              People don't want to fill out a form and wait three days. <b className="text-blue-600 font-semibold">TheSayHi</b> puts trained live chat operators on your website so visitors get real answers, right when it matters most and you get qualified leads without lifting a finger.
            </p>
            
            <div className="mt-8 flex gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-md hover:bg-blue-700 hover:-translate-y-0.5 transition-all duration-200">
                Book a Demo
              </a>
            </div>
            
            <div className="mt-10 text-sm text-slate-500">
              <strong className="text-slate-900 font-semibold">2,400+</strong> brands worldwide | 
              <strong className="text-slate-900 ml-2 font-semibold">Real humans, No Bots</strong>
            </div>
          </motion.div>

          {/* Right Column (Chat Interface) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div aria-hidden="true" className="absolute -inset-8 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            {/* Chat Card */}
            <div className="relative bg-white/90 backdrop-blur-md rounded-3xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 w-full max-w-md mx-auto">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="grid place-items-center w-10 h-10 rounded-full bg-blue-600 shadow-sm overflow-hidden">
                      <img src="/fav-icon.png" alt="agent" className="w-9 h-9 object-contain" />
                    </div>
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white"></span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">TheSayHi Assistant</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1"><span className="inline-block w-1 h-1 rounded-full bg-blue-600 animate-pulse"></span> Online</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-slate-600 px-2 py-0.5 rounded">Live</span>
              </div>

              <div className="py-5 space-y-4">
                <div className="max-w-[80%] text-sm px-4 py-2.5 rounded-2xl bg-slate-100 text-slate-800 rounded-tl-sm">Hi 👋 What are you currently using to capture and convert your website visitors into qualified leads?</div>
                <div className="max-w-[80%] text-sm px-4 py-2.5 rounded-2xl bg-blue-600 text-white rounded-tr-sm shadow-sm ml-auto">Yes! I’m looking for a solution to manage website visitors.</div>
                 <div className="flex justify-start">
                    <div className="max-w-[80%] text-sm px-4 py-2.5 rounded-2xl bg-slate-100 text-slate-800 rounded-tl-sm">
                      Got it. I'll connect you with our enterprise team to assist you further. Before I do, could you please share your preferred deployment or integration setup?
                    </div>
                  </div>
                  
                
                <div className="flex gap-2 flex-wrap">
                  {["Cloud", "On-prem", "Hybrid"].map((opt) => (
                    <span key={opt} className="text-xs font-medium px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 cursor-pointer">{opt}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 pt-2">
                    <div className="grid place-items-center w-8 h-8 rounded-full bg-slate-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-slate-500" aria-hidden="true">
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-2.5 rounded-2xl bg-slate-100">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                    </div>
                  </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-medium">Lead qualified · Score 92</span>
                <span className="text-blue-600 font-medium animate-pulse">Routing...</span>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="hidden md:flex absolute -left-10 top-10 bg-white/90 rounded-2xl p-3 shadow-lg border border-slate-100 items-center gap-2"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 grid place-items-center text-emerald-600 font-bold">↑</div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Conversion</p>
                <p className="text-sm font-bold text-slate-800">+47%</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
              className="hidden md:flex absolute -right-8 bottom-16 bg-white/90 rounded-2xl p-3 shadow-lg border border-slate-100 items-center gap-3"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 grid place-items-center text-blue-600 font-bold">⚡</div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Avg response</p>
                <p className="text-sm font-bold text-slate-800">9.8s</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;