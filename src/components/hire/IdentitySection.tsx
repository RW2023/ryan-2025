"use client";

import { motion } from "framer-motion";
import { Hammer, Target, Network } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

const traits = [
  {
    icon: Hammer,
    title: "Self-Taught. Production-Tested.",
    description:
      "No CS degree. I learned every tool by shipping real systems with it. n8n, Next.js, Python, Docker, PostgreSQL, Claude API. All picked up by building, debugging, and deploying production code.",
  },
  {
    icon: Target,
    title: "50+ Debug Sessions. Zero Unsolved.",
    description:
      "I document every non-trivial bug I fix. Root cause analysis, not band-aids. That discipline means fewer recurring issues and faster resolution when something does break.",
  },
  {
    icon: Network,
    title: "Systems Thinker. Business-First.",
    description:
      "I trace problems to root causes, not symptoms. I see how data flows, tools connect, and processes create bottlenecks. Then I build the system that eliminates them.",
  },
];

export default function IdentitySection() {
  return (
    <section className="relative py-24 md:py-32 px-6" aria-label="About Ryan Wilson - Self-taught automation engineer and full-stack developer">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-secondary tracking-widest uppercase">
            Who I Am
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            Built by Shipping, Not by Studying
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto leading-relaxed">
            Career changer. Built all of this in weeks, not years. Every skill was earned by solving a real problem for a real system.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {traits.map((trait) => (
            <motion.div
              key={trait.title}
              variants={fadeUp}
              className="glass-card p-8 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <trait.icon size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-bright mb-3">
                {trait.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {trait.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
