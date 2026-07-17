"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  {
    label: "Products",
    href: "#products",
    dropdown: [
      { label: "Website Live Chat", href: "#live-chat" },
      { label: "Lead Qualification", href: "#lead-qualification" },
      { label: "Appointment Scheduling", href: "#appointment-scheduling" },
      { label: "Lead Management", href: "#lead-management" },
    ],
  },
  {
    label: "Solutions",
    href: "#solutions",
    dropdown: [
      { label: "For Sales Teams", href: "#for-sales" },
      { label: "For Support Teams", href: "#for-support" },
      { label: "For Agencies", href: "#for-agencies" },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    href: "#resources",
    dropdown: [
      { label: "Blog", href: "#blog" },
      { label: "Help Center", href: "#help-center" },
      { label: "Case Studies", href: "#case-studies" },
    ],
  },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  };

  return (
    <header className={`fixed top-0 inset-x-0 z-[9999] transition-all duration-300 ease-in-out ${isScrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`relative flex items-center justify-between px-4 sm:px-6 py-2.5 transition-all duration-300 rounded-full border ${isScrolled ? "bg-white/90 backdrop-blur-md border-slate-200 shadow-lg" : "bg-transparent border-transparent"}`}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-50">
             <img alt="Logo" className="h-8 w-auto object-contain" src="/logo1.png" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative group" onMouseEnter={() => setOpenDesktopDropdown(item.label)} onMouseLeave={() => setOpenDesktopDropdown(null)}>
                  <button className={`flex items-center gap-1 px-4 py-2 text-[14px] font-medium rounded-full transition-all duration-200 ${openDesktopDropdown === item.label ? "text-blue-700 bg-blue-50" : "text-slate-600 hover:text-blue-700 hover:bg-slate-50"}`}>
                    {item.label}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openDesktopDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`absolute left-0 pt-3 transition-all duration-300 origin-top ${openDesktopDropdown === item.label ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}>
                    <div className="w-56 rounded-2xl border border-slate-100 bg-white shadow-xl p-2 animate-in fade-in zoom-in-95 duration-200">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} className="flex items-center rounded-xl px-4 py-2.5 text-[13px] font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-all">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} className="px-4 py-2 text-[14px] font-medium text-slate-600 rounded-full hover:bg-slate-50 hover:text-blue-700 transition-all">
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="#contact" className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-[13px] font-semibold hover:bg-slate-800 transition-all shadow-sm">
              Book a Demo
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center z-50">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-700">
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
        <div onClick={closeMobileMenu} className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm" />
        <div className={`absolute top-0 right-0 h-full w-[100%] max-w-sm bg-white shadow-2xl p-6 transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <nav className="flex flex-col gap-1 mt-16">
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <button onClick={() => setOpenMobileDropdown(openMobileDropdown === item.label ? null : item.label)} className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${openMobileDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${openMobileDropdown === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      {item.dropdown.map((sub) => (
                        <Link key={sub.label} href={sub.href} onClick={closeMobileMenu} className="block py-2.5 pl-8 text-[14px] text-slate-500 hover:text-blue-600 transition-colors">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.label} href={item.href} onClick={closeMobileMenu} className="py-3 px-4 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-6">
              <Link href="#contact" onClick={closeMobileMenu} className="block w-full py-3 text-center rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">
                Book a Demo
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}