"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; 
import { 
  faTwitter, 
  faLinkedinIn, 
  faFacebookF, 
  faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

// Prevents CSS flicker during hydration
config.autoAddCss = false;

const footerLinks = {
  Products: ["Website Live Chat", "Lead Qualification", "Appointment Scheduling", "Lead Management", "Conversation Inbox", "CRM Integrations", "Analytics Dashboard", "Human Agent Workspace"],
  Solutions: ["Law Firms", "Medical Practices", "Real Estate", "Insurance", "Home Services", "Marketing Agencies", "Education", "Financial Services"],
  Resources: ["Blog", "Case Studies", "Guides", "Success Stories", "FAQ"],
  Company: ["About", "Contact", "Pricing", "Book a Demo"],
  Legal: ["Privacy Policy", "Terms & Conditions", "Cookie Policy"],
};

export default function Footer() {
  const socialIcons = [faTwitter, faLinkedinIn, faFacebookF, faInstagram, faCommentDots];

  return (
    <footer className="w-full bg-white border-t border-slate-200 text-slate-600 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-xl mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shrink-0">S</div>
              TheSayHi
            </div>
            <p className="text-sm leading-relaxed mb-8 max-w-[250px] text-slate-500">
              Human-powered conversations that turn website visitors into qualified customers.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((icon, i) => (
                <motion.button 
                  key={`social-${i}`}
                  whileHover={{ y: -3, backgroundColor: "#2563eb", color: "#fff" }}
                  className="w-9 h-9 flex items-center justify-center bg-slate-100 text-slate-600 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label="Social link"
                >
                  <FontAwesomeIcon icon={icon} className="w-4 h-4" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Dynamic Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-900 font-bold text-sm uppercase tracking-wider mb-6">{title}</h4>
              <ul className="space-y-4">
                {links.map((link, idx) => (
                  <li key={`${title}-${idx}`}>
                    <motion.a 
                      whileHover={{ x: 5, color: "#2563eb" }}
                      href="#" 
                      className="text-sm transition-colors block"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
          <p>© 2026 TheSayHi. All rights reserved.</p>
          <div className="flex gap-8">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}