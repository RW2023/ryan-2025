"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Define the Problem",
    description:
      "You share the challenge. I ask targeted questions to understand the workflow, the bottlenecks, and what a working solution looks like for your team.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Build, Test, Iterate",
    description:
      "I design the system architecture, wire the integrations, and ship working code. You review progress, I refine until it fits your requirements exactly.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deploy and Document",
    description:
      "The solution goes live in your production environment. Clean handoff with documented code, clear ownership, and a system that runs without hand-holding.",
  },
];

export default function ProcessTimeline() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="How I work - from problem definition to production deployment">
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
          className="mb-16 text-center"
        >
          <span
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            How I Work
          </span>
          <h2
            className="text-3xl md:text-5xl font-heading font-bold mt-3"
            style={{ color: "var(--color-text-bright)" }}
          >
            From Problem to Production
          </h2>
          <p
            className="mt-4 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Straightforward process. No surprises. You stay informed at every step.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative flex flex-col md:flex-row gap-8 md:gap-6"
        >
          {/* Connecting line */}
          <div
            className="absolute left-[1.65rem] top-0 bottom-0 w-px md:hidden"
            style={{ background: "linear-gradient(180deg, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.1), transparent)" }}
          />
          <div
            className="hidden md:block absolute top-[2.5rem] left-[calc(16.67%-0.5rem)] right-[calc(16.67%-0.5rem)] h-px"
            style={{ background: "linear-gradient(90deg, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.4))" }}
          />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex-1 flex items-start md:flex-col md:items-center gap-5 md:gap-0"
            >
              {/* Step number circle */}
              <div
                className="relative z-10 w-[3.3rem] h-[3.3rem] rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "var(--color-surface)",
                  border: "2px solid rgba(0, 212, 255, 0.3)",
                }}
              >
                <span
                  className="text-lg font-heading font-bold text-glow"
                  style={{ color: "var(--color-accent)" }}
                >
                  {step.number}
                </span>
              </div>

              {/* Content card */}
              <div className="glass-card p-6 md:mt-6 flex-1 md:text-center hover:border-[var(--color-border-hover)] transition-all duration-300">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 md:mx-auto"
                  style={{
                    background: "var(--color-accent-dim)",
                    border: "1px solid rgba(0, 212, 255, 0.1)",
                  }}
                >
                  <step.icon size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3
                  className="text-lg font-heading font-semibold mb-2"
                  style={{ color: "var(--color-text-bright)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
