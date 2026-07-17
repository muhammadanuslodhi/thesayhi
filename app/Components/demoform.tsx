"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { CheckCircle2, Zap, ShieldCheck, Users } from "lucide-react";

export default function DemoRequestForm() {
  const [formData, setFormData] = useState({
    businessName: "", website: "", industry: "", companySize: "",
    fullName: "", workEmail: "", phone: "", meetingTime: "", goals: ""
  });

  const industries = [
    "Law Firms", "Medical Practices", "Real Estate", "Insurance", "Home Services",
    "Marketing Agencies", "Education", "Financial Services", "Automotive",
    "Dental Clinics", "Accounting & Tax Services", "Construction", "IT & Software",
    "E-commerce", "Travel & Hospitality", "Consulting", "Non-Profit Organizations", "Other"
  ];

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) value = value.slice(0, 10);
    setFormData({ ...formData, phone: value.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3") });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const promise = fetch("/sendmail.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then(async (res) => {
      if (!res.ok) throw new Error();
      setFormData({ businessName: "", website: "", industry: "", companySize: "", fullName: "", workEmail: "", phone: "", meetingTime: "", goals: "" });
    });

    toast.promise(promise, {
      loading: "Sending request...",
      success: <b>Demo request submitted!</b>,
      error: <b>Submission failed. Please try again.</b>,
    });
  };

  const inputClass = "w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all";
  const labelClass = "block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <section className="py-16 md:py-24 px-6 bg-slate-50">
      <Toaster position="top-right" />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[380px,1fr] gap-8 md:gap-12 items-start">
        
        {/* Left Side Content */}
        <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="font-bold text-lg mb-6 text-slate-900">What you'll see</h3>
            {["A live conversation on a site like yours", "Lead qualification tailored to your buyer", "Appointment booking with your calendar", "Handoff to sales with full context", "Reporting your leadership will love"].map((item, i) => (
              <div key={i} className="flex gap-3 mb-4 text-sm text-slate-600">
                <CheckCircle2 className="text-blue-500 w-5 h-5 shrink-0" /> {item}
              </div>
            ))}
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {[ { icon: Zap, title: "Live in minutes", text: "Most teams launch within a business day." }, { icon: ShieldCheck, title: "Enterprise ready", text: "Encryption in transit and at rest." }, { icon: Users, title: "Team friendly", text: "Route to the right sales or support team." } ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-600 self-start"><item.icon size={20} /></div>
                <div><h4 className="font-semibold text-sm text-slate-900">{item.title}</h4><p className="text-xs text-slate-500">{item.text}</p></div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side Form */}
        <motion.form initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-lg">
          <div className="grid md:grid-cols-2 gap-x-6 gap-y-5 mb-6">
            <div><label className={labelClass}>Business name *</label><input required value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} className={inputClass} /></div>
            <div><label className={labelClass}>Website</label><input value={formData.website} onChange={e => setFormData({...formData, website: e.target.value})} placeholder="thesayhi.com" className={inputClass} /></div>
            
            <div><label className={labelClass}>Industry</label>
              <select value={formData.industry} onChange={e => setFormData({...formData, industry: e.target.value})} className={inputClass}>
                <option value="">Select Industry</option>
                {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
              </select>
            </div>
            <div><label className={labelClass}>Company size</label>
              <select value={formData.companySize} onChange={e => setFormData({...formData, companySize: e.target.value})} className={inputClass}>
                <option value="">Select size</option><option>1-50</option><option>50+</option>
              </select>
            </div>
            
            <div><label className={labelClass}>Full name *</label><input required value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className={inputClass} /></div>
            <div><label className={labelClass}>Work email *</label><input required type="email" value={formData.workEmail} onChange={e => setFormData({...formData, workEmail: e.target.value})} className={inputClass} /></div>
            
            <div><label className={labelClass}>Phone</label><input value={formData.phone} onChange={handlePhoneChange} placeholder="111-111-1111" className={inputClass} /></div>
            <div><label className={labelClass}>Preferred meeting time</label><input value={formData.meetingTime} onChange={e => setFormData({...formData, meetingTime: e.target.value})} placeholder="e.g. Tue afternoon PT" className={inputClass} /></div>
          </div>
          
          <div className="mb-6"><label className={labelClass}>What are your goals?</label><textarea value={formData.goals} onChange={e => setFormData({...formData, goals: e.target.value})} className={`${inputClass} h-28 resize-none`} /></div>
          
          <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-4 px-8 rounded-lg transition-colors">
            Request demo →
          </motion.button>
          <p className="text-[11px] text-slate-400 mt-4">By submitting you agree to our Privacy Policy.</p>
        </motion.form>
      </div>
    </section>
  );
}