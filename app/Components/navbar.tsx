"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageSquare, Target, Calendar, UserCheck, Inbox, Plug, BarChart3, Headphones, Briefcase, Hospital, Building, Scale, Wrench, Megaphone, GraduationCap, Banknote } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "Website Live Chat", icon: MessageSquare, href: "/products/website-live-chat" },
      { label: "Lead Qualification", icon: Target, href: "/products/lead-qualification" },
      { label: "Appointment Scheduling", icon: Calendar, href: "/products/appointment-scheduling" },
      { label: "Lead Management", icon: UserCheck, href: "/products/lead-management" },
      { label: "Conversation Inbox", icon: Inbox, href: "/products/conversation-inbox" },
      { label: "CRM Integrations", icon: Plug, href: "/products/crm-integrations" },
      { label: "Analytics Dashboard", icon: BarChart3, href: "/products/analytics-dashboard" },
      { label: "Human Agent Workspace", icon: Headphones, href: "/products/human-agent-workspace" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Law Firms", icon: Scale, href: "/industries/#law-firms" },
      { label: "Medical Practices", icon: Hospital, href: "/industries/#medical" },
      { label: "Real Estate", icon: Building, href: "/industries/#real-estate" },
      { label: "Insurance", icon: Briefcase, href: "/industries/#insurance" },
      { label: "Home Services", icon: Wrench, href: "/industries/#home-services" },
      { label: "Marketing Agencies", icon: Megaphone, href: "/industries/#marketing-agencies" },
      { label: "Education", icon: GraduationCap, href: "/industries/#education" },
      { label: "Financial Services", icon: Banknote, href: "/industries/#financial-services" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      { label: "Blog", icon: MessageSquare, href: "/resources/blog" },
      { label: "Help Center", icon: Headphones, href: "/resources/help-center" },
      { label: "Case Studies", icon: BarChart3, href: "/resources/case-studies" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDesktopDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDesktopDropdown(null);
    }, 150);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-[9999] py-4 px-4">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 shadow-sm">
        <Link href="/" className="flex-shrink-0">
          <img alt="Logo" className="h-8 w-auto" src="/logo1.png" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) =>
            item.dropdown ? (
              <div 
                key={item.label} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link 
                  href={item.href}
                  className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-full transition-colors ${openDesktopDropdown === item.label ? "text-blue-700" : "text-slate-600 hover:text-blue-700"}`}
                >
                  {item.label}
                  <ChevronDown size={14} className={`transition-transform duration-300 ${openDesktopDropdown === item.label ? "rotate-180" : ""}`} />
                </Link>

                <div className={`absolute left-0 top-full pt-3 transition-all duration-200 ${openDesktopDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}>
                  <div className="w-[280px] bg-white rounded-2xl border border-slate-100 shadow-xl p-2">
                    {item.dropdown.map((sub) => {
                      const Icon = sub.icon;
                      return (
                        <Link key={sub.label} href={sub.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
                          <div className="text-blue-600"><Icon size={18} /></div>
                          <span className="font-medium text-slate-700 text-[14px]">{sub.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href} className="px-4 py-2 text-[14px] font-medium text-slate-600 rounded-full hover:text-blue-700 transition-colors">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <Link href="/demo" className="hidden md:flex px-5 py-2 rounded-full bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700 transition-all shadow-sm">
          Book a Demo
        </Link>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 inset-x-4 bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 flex flex-col gap-4">
          {NAV_LINKS.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-semibold text-slate-800">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}