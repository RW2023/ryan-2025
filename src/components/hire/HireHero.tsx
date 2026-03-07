"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, stagger } from "@/lib/motion";

export default function HireHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-grid scanline px-6">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
      >
        {/* Label pill */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
          <span className="text-xs font-mono text-accent tracking-wider uppercase">
            Web Development for Small Business
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1]"
        >
          Your Business Deserves a Website{" "}
          <span className="text-gradient">That Actually Works</span>
        </motion.h1>

        {/* Subheadline — loss-framed */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-xl text-text-muted max-w-2xl leading-relaxed"
        >
          Every day without a professional website, you&apos;re invisible to the
          customers searching for exactly what you offer.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <button
            onClick={() =>
              document.querySelector("#hire-contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 rounded-lg bg-accent text-accent-on text-lg font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </button>
          <span className="text-sm text-text-muted font-mono">
            No commitment. Just a conversation.
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
