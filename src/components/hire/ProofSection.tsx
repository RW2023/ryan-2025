"use client";

import { motion } from "framer-motion";

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
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProofSection() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="Automation engineering track record and production metrics">
      {/* Faint glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.04) 0%, transparent 70%)" }}
      />

      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="text-3xl md:text-5xl font-heading font-bold"
            style={{ color: "var(--color-text-bright)" }}
          >
            Numbers From Production
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            These are not projections or test results. Every metric below comes from systems I built, deployed, and operate right now.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={statVariant}
              className="text-center"
            >
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-glow"
                style={{ color: "var(--color-accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs font-mono uppercase tracking-wider mt-2"
                style={{ color: "var(--color-text-muted)" }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
