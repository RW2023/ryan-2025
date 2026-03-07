"use client";

import { motion } from "framer-motion";
import { SearchX, UserX, TrendingDown } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

const painPoints = [
  {
    icon: SearchX,
    title: "You're invisible on Google",
    description:
      "When people search for your service, they find your competitors instead. No website means no presence where it matters most.",
  },
  {
    icon: UserX,
    title: "You look less trustworthy",
    stat: "81%",
    description:
      "of consumers research online before buying. No website means no credibility — and no chance to make a first impression.",
  },
  {
    icon: TrendingDown,
    title: "You're leaving money on the table",
    description:
      "Without a way to capture leads around the clock, every missed visit is a missed sale. Your competitors are open 24/7 — are you?",
  },
];

export default function PainSection() {
  return (
    <section className="relative py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-mono text-secondary tracking-widest uppercase">
            The Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            What Happens Without a Real Website
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeUp}
              className="glass-card p-8 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <point.icon size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-bright mb-3">
                {point.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {point.stat && (
                  <span className="text-2xl font-heading font-bold text-text-bright">
                    {point.stat}{" "}
                  </span>
                )}
                {point.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
