"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, ChevronDown, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const roles = ["Full-Stack Developer", "Automation Engineer", "AI Integrator"];

function useRoleCycle(words: string[], interval = 3000) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      interval
    );
    return () => clearInterval(timer);
  }, [words, interval]);
  return index;
}

export default function HeroSection() {
  const roleIndex = useRoleCycle(roles, 2800);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--color-base)" }}
    >
      {/* Layered background effects */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute inset-0 scanline" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: [0, -25, 35, 0],
          y: [0, 30, -25, 0],
          scale: [1, 0.9, 1.15, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(129, 140, 248, 0.06) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{
          x: [0, 15, -15, 0],
          y: [0, -20, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(245, 158, 11, 0.04) 0%, transparent 70%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Main content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
      >
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-border"
            style={{
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
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[0.95]">
              <span style={{ color: "var(--color-text-bright)" }}>Ryan</span>
              <br />
              <span className="text-gradient">Wilson</span>
            </h1>
          </motion.div>

          {/* Rotating roles with crossfade */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 h-9 overflow-hidden"
          >
            <Terminal
              size={16}
              style={{ color: "var(--color-accent)", opacity: 0.6 }}
              className="flex-shrink-0"
            />
            <div className="relative h-9 min-w-[280px]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute inset-0 flex items-center text-lg md:text-xl font-mono"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block w-[2px] h-5 flex-shrink-0"
              style={{ background: "var(--color-accent)" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg max-w-lg leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            I build performant, polished web applications with modern frameworks
            and AI-powered workflows.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 pt-2">
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-7 py-3.5 rounded-lg font-semibold font-heading overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--color-accent)",
                color: "var(--color-accent-on)",
              }}
            >
              <span className="relative z-10">View Projects</span>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-accent), #818cf8)",
                }}
              />
            </button>
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-7 py-3.5 rounded-lg border font-semibold font-heading transition-all duration-300 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-text)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent)";
                e.currentTarget.style.boxShadow = "var(--glow-accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)";
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Contact Me
            </button>
          </motion.div>

          {/* Socials */}
          <motion.div variants={fadeUp} className="flex gap-5 pt-1">
            <a
              href="https://github.com/RW2023"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ryan-e-wilson/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-all duration-200 hover:-translate-y-0.5"
              style={{ color: "var(--color-text-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--color-text-muted)")
              }
            >
              <Linkedin size={20} />
            </a>
          </motion.div>
        </div>

        {/* Right: Photo with orbital ring */}
        <motion.div
          variants={scaleIn}
          className="relative flex-shrink-0"
        >
          {/* Outer glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
            }}
          />

          {/* Orbital ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(0, 212, 255, 0.1)" }}
          >
            {/* Orbital dot */}
            <div
              className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
              style={{
                background: "var(--color-accent)",
                boxShadow: "0 0 12px var(--color-accent-glow)",
              }}
            />
          </motion.div>

          {/* Second orbital ring (counter-rotate) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[370px] md:h-[370px] rounded-full border pointer-events-none"
            style={{ borderColor: "rgba(129, 140, 248, 0.06)" }}
          >
            <div
              className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{
                background: "#818cf8",
                boxShadow: "0 0 8px rgba(129, 140, 248, 0.4)",
              }}
            />
          </motion.div>

          {/* Photo container */}
          <div
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-2 z-10"
            style={{
              ringColor: "rgba(0, 212, 255, 0.2)",
              boxShadow:
                "0 0 40px rgba(0, 212, 255, 0.1), 0 0 80px rgba(0, 212, 255, 0.05), inset 0 0 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Image
              src="/profile/darkProfile.jpg"
              alt="Ryan Wilson"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle gradient overlay on photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 60%, rgba(10, 14, 23, 0.4) 100%)",
              }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} style={{ color: "rgba(148, 163, 184, 0.4)" }} />
        </motion.div>
      </motion.div>

      {/* Decorative corner lines */}
      <div
        className="absolute top-8 left-8 w-16 h-16 border-l border-t pointer-events-none hidden lg:block"
        style={{ borderColor: "rgba(0, 212, 255, 0.08)" }}
      />
      <div
        className="absolute bottom-8 right-8 w-16 h-16 border-r border-b pointer-events-none hidden lg:block"
        style={{ borderColor: "rgba(0, 212, 255, 0.08)" }}
      />
    </section>
  );
}
