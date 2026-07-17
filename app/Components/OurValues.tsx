import { Users, Compass, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Humans first",
    description:
      "Every decision starts with what's right for the person on the other end.",
  },
  {
    icon: Compass,
    title: "Speed with warmth",
    description: "Fast without feeling rushed. Precise without feeling cold.",
  },
  {
    icon: Target,
    title: "Outcomes over output",
    description:
      "We measure ourselves by our customers' results, not our activity.",
  },
  {
    icon: Heart,
    title: "Craft",
    description: "We take pride in the details others overlook.",
  },
];

export default function OurValues() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
            Values
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#0a1128] leading-tight">
            What we believe.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="h-full rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="h-10 w-10 rounded-xl bg-blue-600 grid place-items-center text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-[#0a1128] text-lg">
                  {value.title}
                </div>
                <p className="mt-2 text-gray-500 text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}