"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/motion";

const stats = [
  { value: "5+", label: "Sites Launched" },
  { value: "100%", label: "Mobile Optimized" },
  { value: "<2s", label: "Average Load Time" },
  { value: "24/7", label: "Your Site Never Sleeps" },
];

const statVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StatsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      {/* Faint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Gradient divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-16" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-12 md:gap-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariant}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-heading font-bold text-accent text-glow">
                {stat.value}
              </div>
              <div className="text-sm font-mono text-text-muted uppercase tracking-wider mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
