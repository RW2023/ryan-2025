"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

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
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            How I Work
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            From Problem to Production
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
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
          {/* Connecting line — mobile: vertical left, desktop: horizontal top */}
          <div className="absolute left-[1.65rem] top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent md:hidden" />
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(16.67%-0.5rem)] right-[calc(16.67%-0.5rem)] h-px bg-gradient-to-r from-accent/40 via-accent/20 to-accent/40" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="relative flex-1 flex items-start md:flex-col md:items-center gap-5 md:gap-0"
            >
              {/* Step number circle */}
              <div className="relative z-10 w-[3.3rem] h-[3.3rem] rounded-full bg-surface border-2 border-accent/30 flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-heading font-bold text-accent text-glow">
                  {step.number}
                </span>
              </div>

              {/* Content card */}
              <div className="glass-card p-6 md:mt-6 flex-1 md:text-center">
                <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center mb-3 md:mx-auto">
                  <step.icon size={20} className="text-accent" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-text-bright mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
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
