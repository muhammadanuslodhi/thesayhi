"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    const formatted = value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    setFormData({ ...formData, phone: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = fetch("/sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      if (!res.ok) throw new Error("Failed");
      setFormData({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
    });

    toast.promise(promise, {
      loading: "Sending inquiry...",
      success: <b>Inquiry submitted successfully!</b>,
      error: <b>Submission failed.</b>,
    });
  };

  // Helper for input text color classes
  const inputStyle = "w-full p-4 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all";

  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden" id="contact">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-blue-600 rounded-[2rem] p-10 text-white flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-black mb-4">Contact Information</h3>
              <p className="text-blue-100/80">Reach out via any channel! Our support agents respond within a few hours.</p>
              <div className="space-y-6 mt-8">
                <div className="flex items-center gap-4"><div className="p-3 bg-white/10 rounded-xl"><Mail size={20} /></div><span className="font-semibold text-sm">info@thesayhi.com</span></div>
                <div className="flex items-center gap-4"><div className="p-3 bg-white/10 rounded-xl"><Phone size={20} /></div><span className="font-semibold text-sm">+1(346)469-4020</span></div>
                <div className="flex items-center gap-4"><div className="p-3 bg-white/10 rounded-xl"><MapPin size={20} /></div><span className="font-semibold text-sm">5900 Balcones Dr STE 100, Austin, TX</span></div>
              </div>
            </div>
            <p className="text-xs text-blue-200/60 mt-10">© 2026 TheSayHi Inc.</p>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white border border-slate-100 rounded-[2rem] p-12 shadow-xl shadow-slate-200/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900 pl-1">Full Name *</label>
                  <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="John Doe" className={inputStyle} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900 pl-1">Email Address *</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="john@company.com" className={inputStyle} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900 pl-1">Phone Number <span className="lowercase text-slate-500 font-normal">(optional)</span></label>
                  <input value={formData.phone} onChange={handlePhoneChange} placeholder="111-111-1111" className={inputStyle} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900 pl-1">Inquiry Reason</label>
                  <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className={`${inputStyle} cursor-pointer`}>
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Enterprise Sales</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center pl-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-900">Message Details *</label>
                  <span className="text-[11px] font-bold text-slate-500">{formData.message.length} / 1000 characters</span>
                </div>
                <textarea required maxLength={1000} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} rows={5} placeholder="Describe how we can help you build your enterprise multitenant platforms..." className={inputStyle} />
              </div>

              <button type="submit" className="w-full h-14 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-[0.98]">
                Submit Inquiry <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}