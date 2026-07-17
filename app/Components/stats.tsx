"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");
  
  const springValue = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const transform = useTransform(springValue, (latest) => 
    latest % 1 === 0 ? Math.round(latest).toString() : latest.toFixed(1)
  );

  useEffect(() => {
    // Listen for changes in the transformed value and update local state
    const unsubscribe = transform.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [transform]);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

export default function StatsSection() {
  const stats = [
    { value: 47, label: "Increase in lead conversions", suffix: "%" },
    { value: 9.8, label: "Average response time", suffix: "s" },
    { value: 100, label: "Platform reliability", suffix: "%" },
    { value: 4.9, label: "Customer satisfaction", suffix: "/5" },
  ];

  return (
    <section className="bg-blue-600 py-24 px-6 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-white">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="flex flex-col items-center text-center"
          >
            <h3 className="text-4xl md:text-5xl font-black mb-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h3>
            <p className="text-blue-100 text-sm font-medium tracking-wide">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}