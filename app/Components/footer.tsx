"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;

const footerLinks = {
  Features: [
    "Website Live Chat",
    "Lead Qualification",
    "Appointment Scheduling",
    "CRM Integration",
    "Analytics Dashboard",
    "Multi-Team Routing",
  ],

  Industries: [
    "Law Firms",
    "Medical Practices",
    "Real Estate",
    "Insurance",
    "Home Services",
    "Marketing Agencies",
    "Education",
    "Financial Services",
  ],

  Resources: [
    "Blog",
    "Case Studies",
    "Pricing",
  ],

  Company: [
    "About",
    "Partner Program",
    "Contact",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1 space-y-6">
            <img alt="Logo" className="h-8 w-auto" src="/logo1.png" />
            <p className="text-sm text-slate-500 leading-relaxed max-w-[240px]">
              Human-powered conversations that turn visitors into qualified customers.
            </p>
            <div className="flex gap-3">
              {[faTwitter, faLinkedinIn, faFacebookF, faInstagram, faCommentDots].map((icon, i) => (
                <motion.button 
                  key={i}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FontAwesomeIcon icon={icon} size="sm" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-widest mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-6">
          <p className="text-sm text-slate-400">© 2026 TheSayHi. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}