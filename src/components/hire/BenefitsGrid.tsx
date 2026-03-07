"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Zap,
  Search,
  Shield,
  Palette,
  HeartHandshake,
} from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

const benefits = [
  {
    icon: Smartphone,
    title: "Looks Great Everywhere",
    description:
      "Phones, tablets, laptops — your site adapts perfectly to every screen.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built for speed. Pages load in under 2 seconds so visitors stay, not bounce.",
  },
  {
    icon: Search,
    title: "Found on Google",
    description:
      "SEO baked in from day one. Your customers can actually find you.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "HTTPS, modern hosting, 99.9% uptime. Your site is always on.",
  },
  {
    icon: Palette,
    title: "Designed to Match Your Brand",
    description:
      "Custom design that looks and feels like you — not a cookie-cutter template.",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description:
      "Questions after launch? I'm a message away. You're never left hanging.",
  },
];

export default function BenefitsGrid() {
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
          <span className="text-xs font-mono text-accent tracking-widest uppercase">
            What You Get
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-text-bright">
            A Website That Works While You Sleep
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={fadeUp}
              className="glass-card p-6 group"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-dim flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors duration-200">
                <benefit.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-text-bright mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
