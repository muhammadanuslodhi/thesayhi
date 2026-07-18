"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageSquare, Target, Calendar, UserCheck, Inbox, Plug, BarChart3, Headphones, Briefcase, Hospital, Building, Scale, Wrench, Megaphone, GraduationCap, Banknote } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },

  {
<<<<<<< Updated upstream
    label: "Products",
    href: "/products", // Root link add ki
    dropdown: [
      { label: "Website Live Chat", desc: "Engage every visitor in real time.", icon: MessageSquare, href: "/products/website-live-chat" },
      { label: "Lead Qualification", desc: "Identify high-intent prospects in real time.", icon: Target, href: "/products/lead-qualification" },
      { label: "Appointment Scheduling", desc: "Book meetings on the spot.", icon: Calendar, href: "/products/appointment-scheduling" },
      { label: "Lead Management", desc: "Track every lead to close.", icon: UserCheck, href: "/products/lead-management" },
      { label: "Conversation Inbox", desc: "One unified thread per contact.", icon: Inbox, href: "/products/conversation-inbox" },
      { label: "CRM Integrations", desc: "Sync with your stack in minutes.", icon: Plug, href: "/products/crm-integrations" },
      { label: "Analytics Dashboard", desc: "Measure what actually converts.", icon: BarChart3, href: "/products/analytics-dashboard" },
      { label: "Human Agent Workspace", desc: "Purpose-built for real people.", icon: Headphones, href: "/products/human-agent-workspace" },
=======
    label: "Features",
    href: "/features",
    dropdown: [
      {
        label: "Website Live Chat",
        href: "/features/live-chat",
      },
      {
        label: "Lead Qualification",
        href: "/features/lead-qualification",
      },
      {
        label: "Appointment Scheduling",
        href: "/features/appointment-scheduling",
      },
      {
        label: "CRM Integration",
        href: "/features/crm-integration",
      },
      {
        label: "Analytics Dashboard",
        href: "/features/analytics-dashboard",
      },
      {
        label: "Multi-Team Routing",
        href: "/features/multi-team-routing",
      },
>>>>>>> Stashed changes
    ],
  },

  {
<<<<<<< Updated upstream
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "Law Firms", desc: "", icon: Scale, href: "/solutions/law-firms" },
      { label: "Medical Practices", desc: "", icon: Hospital, href: "/solutions/medical" },
      { label: "Real Estate", desc: "", icon: Building, href: "/solutions/real-estate" },
      { label: "Insurance", desc: "", icon: Briefcase, href: "/solutions/insurance" },
      { label: "Home Services", desc: "", icon: Wrench, href: "/solutions/home-services" },
      { label: "Marketing Agencies", desc: "", icon: Megaphone, href: "/solutions/marketing-agencies" },
      { label: "Education", desc: "", icon: GraduationCap, href: "/solutions/education" },
      { label: "Financial Services", desc: "", icon: Banknote, href: "/solutions/financial-services" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    href: "/resources", // Root link add ki
    dropdown: [
      { label: "Blog", desc: "Latest industry insights.", icon: MessageSquare, href: "/resources/blog" },
      { label: "Help Center", desc: "Get support anytime.", icon: Headphones, href: "/resources/help-center" },
      { label: "Case Studies", desc: "See our success stories.", icon: BarChart3, href: "/resources/case-studies" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
=======
    label: "Industries",
    href: "/industries",
    dropdown: [
      {
        label: "Law Firms",
        href: "/industries/law-firms",
      },
      {
        label: "Medical Practices",
        href: "/industries/medical-practices",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
      },
      {
        label: "Insurance",
        href: "/industries/insurance",
      },
      {
        label: "Home Services",
        href: "/industries/home-services",
      },
      {
        label: "Marketing Agencies",
        href: "/industries/marketing-agencies",
      },
      {
        label: "Education",
        href: "/industries/education",
      },
      {
        label: "Financial Services",
        href: "/industries/financial-services",
      },
    ],
  },

  {
    label: "Pricing",
    href: "/pricing",
  },

  {
    label: "Resources",
    href: "/resources",
    dropdown: [
      {
        label: "Blog",
        href: "/blog",
      },
      {
        label: "Case Studies",
        href: "/case-studies",
      },
      {
        label: "Guides",
        href: "/guides",
      },
      {
        label: "FAQ",
        href: "/faq",
      },
    ],
  },
>>>>>>> Stashed changes

  {
    label: "Company",
    href: "/company",
    dropdown: [
      {
        label: "About",
        href: "/about",
      },
      {
        label: "Partner Program",
        href: "/partner-program",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ease-in-out ${isScrolled ? "py-2" : "py-4"}`}>
      <div ref={navRef} className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`relative z-40 flex items-center justify-between px-6 py-2.5 transition-all duration-300 rounded-full border ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-lg" : "bg-transparent border-transparent"}`}>
          
          <Link href="/" className="flex items-center gap-2 z-50 cursor-pointer">
             <img alt="Logo" className="h-8 w-auto object-contain" src="/logo1.png" />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDesktopDropdown(openDesktopDropdown === item.label ? null : item.label)}
                    className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-full transition-all cursor-pointer ${openDesktopDropdown === item.label ? "text-blue-700" : "text-slate-600 hover:text-blue-700"}`}
                  >
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openDesktopDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="px-4 py-2 text-[14px] font-medium text-slate-600 rounded-full hover:text-blue-700 transition-all cursor-pointer">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <Link href="/demo" className="hidden md:flex px-5 py-2 rounded-full bg-blue-600 text-white text-[13px] font-semibold hover:bg-blue-700 transition-all shadow-sm cursor-pointer">
            Book a Demo
          </Link>

          <div className="flex md:hidden items-center z-50">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700 cursor-pointer">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Dropdown Container */}
        {NAV_LINKS.map((item) => (
          item.dropdown && (
            <div
              key={`${item.label}-dropdown`}
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-5 transition-all duration-300 origin-top pointer-events-none ${openDesktopDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2"}`}
            >
              <div className="w-[95vw] max-w-[1000px] rounded-3xl border border-slate-100 bg-white shadow-2xl p-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
                  {item.dropdown.map((sub) => {
                    const Icon = sub.icon;
                    return (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setOpenDesktopDropdown(null)}
                        className="flex gap-4 group/item items-start cursor-pointer"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-blue-50 text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          <Icon size={22} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-[15px]">{sub.label}</h4>
                          {sub.desc && <p className="text-[13px] text-slate-500 mt-1 leading-snug">{sub.desc}</p>}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                
                <div className="mt-10 pt-6 border-t border-slate-100 flex justify-between items-center text-sm">
                  <span className="text-slate-500">Everything you need to convert visitors — powered by real humans.</span>
                  <Link href={item.href} onClick={() => setOpenDesktopDropdown(null)} className="text-blue-600 font-semibold hover:underline cursor-pointer">
                    View all {item.label.toLowerCase()} →
                  </Link>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </header>
  );
}