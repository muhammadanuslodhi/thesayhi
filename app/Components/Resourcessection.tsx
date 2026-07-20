import Link from "next/link";
import {
  ArrowRight,
  Newspaper,
  Trophy,
  BookOpen,
  FileText,
  CircleQuestionMark,
} from "lucide-react";

const cards = [
  {
    href: "/resources/blog",
    icon: Newspaper,
    title: "Blog",
    description: "Fresh perspectives from the front lines.",
  },
  {
    href: "/resources/case-studies",
    icon: Trophy,
    title: "Case Studies",
    description: "Real results from real teams.",
  },
  {
    href: "/resources/guides",
    icon: BookOpen,
    title: "Guides",
    description: "Long-form playbooks worth reading.",
  },
  {
    href: "/resources/success-stories",
    icon: FileText,
    title: "Success Stories",
    description: "How customers are growing with us.",
  },
  {
    href: "/resources/faq",
    icon: CircleQuestionMark,
    title: "FAQ",
    description: "Answers to the most common questions.",
    active: true,
  },
];

export default function ResourcesSection() {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured / Playbook card */}
        <Link
          href="/resources/blog/engaging-visitors"
          className="group relative lg:col-span-2 lg:row-span-2 rounded-3xl overflow-hidden min-h-[400px] p-10 flex flex-col items-center justify-center text-white shadow-lg bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400">
          <div className="relative flex flex-col">
            <div className="text-xs font-semibold uppercase tracking-widest opacity-80">
              Featured · Playbook
            </div>
            <h3 className="mt-3 text-3xl md:text-4xl font-bold leading-tight max-w-lg">
              The playbook for engaging every visitor in under 10 seconds.
            </h3>
            <div className="mt-6 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
              Read the playbook <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </Link>

        {/* Category cards */}
        {cards.map(({ href, icon: Icon, title, description, active }) => (
          <Link
            key={href}
            href={href}
            className="group h-full rounded-3xl border border-slate-200 bg-white p-8 hover:shadow-lg transition flex flex-col"
            data-status={active ? "active" : undefined}
            aria-current={active ? "page" : undefined}
          >
            <div className="h-11 w-11 rounded-full bg-blue-600 grid place-items-center text-white">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-500 flex-1">
              {description}
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">
              Explore <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}