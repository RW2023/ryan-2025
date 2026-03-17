"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/motion";

const stats = [
  { value: "1,500+", label: "Jobs Processed via Automation" },
  { value: "9+", label: "Production Dashboards" },
  { value: "50+", label: "Workflows Deployed" },
  { value: "24/7", label: "Systems Running Unattended" },
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

export default function ProofSection() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="Automation engineering track record and production metrics">
      {/* Faint glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Gradient divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-16" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-bright">
            Numbers From Production
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            These are not projections or test results. Every metric below comes from systems I built, deployed, and operate right now.
          </p>
        </motion.div>

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
