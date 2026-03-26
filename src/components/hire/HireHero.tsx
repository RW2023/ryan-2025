"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HireHero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-6"
      style={{ background: "var(--color-base)" }}
      aria-label="Hire Ryan Wilson - Automation Engineer, AI Integration Specialist, Full-Stack Developer"
    >
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 scanline" />

      {/* Animated orbs */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -25, 35, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 70%)" }}
      />

      {/* Noise overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8"
      >
        {/* Label pill */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border"
          style={{
            borderColor: "var(--color-border)",
            background: "var(--glass-bg)",
            backdropFilter: "blur(12px)",
          }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
              style={{ background: "var(--color-accent)" }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ background: "var(--color-accent)" }}
            />
          </span>
          <span
            className="text-xs font-mono tracking-wider uppercase"
            style={{ color: "var(--color-accent)" }}
          >
            Automation Engineer | AI Integration | Full-Stack Developer
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1]"
          style={{ color: "var(--color-text-bright)" }}
        >
          I Ship Production Systems.{" "}
          <span className="text-gradient">Not Prototypes.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-base md:text-xl max-w-2xl leading-relaxed"
          style={{ color: "var(--color-text-muted)" }}
        >
          Automation pipelines processing 1,500+ jobs. AI scoring engines. Full-stack
          apps with real users. I build the systems your team needs, then I make sure
          they keep running.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3">
          <button
            onClick={() =>
              document.querySelector("#hire-contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="group relative px-8 py-4 rounded-lg text-lg font-semibold font-heading overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: "var(--color-accent)",
              color: "var(--color-accent-on)",
              boxShadow: "0 0 30px rgba(0, 212, 255, 0.1)",
            }}
          >
            <span className="relative z-10">Start a Conversation</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg, var(--color-accent), #818cf8)" }}
            />
          </button>
          <span
            className="text-sm font-mono"
            style={{ color: "var(--color-text-muted)" }}
          >
            Available for freelance, contract, or full-time roles
          </span>
        </motion.div>
      </motion.div>

      {/* Decorative corners */}
      <div
        className="absolute top-8 left-8 w-16 h-16 border-l border-t pointer-events-none hidden lg:block"
        style={{ borderColor: "rgba(0, 212, 255, 0.08)" }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-r border-b pointer-events-none hidden lg:block"
        style={{ borderColor: "rgba(0, 212, 255, 0.08)" }}
      />

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
          <ChevronDown size={24} style={{ color: "rgba(148, 163, 184, 0.4)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
