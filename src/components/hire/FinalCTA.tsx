"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function FinalCTA() {
  return (
    <section id="hire-contact" className="relative py-24 md:py-32 px-6" aria-label="Contact Ryan Wilson - hire a freelance automation engineer and full-stack developer">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)" }}
      />

      {/* Top separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.15), transparent)" }}
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-heading font-bold"
            style={{ color: "var(--color-text-bright)" }}
          >
            Let&apos;s{" "}
            <span className="text-gradient">Build Something Real</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-lg mx-auto leading-relaxed"
            style={{ color: "var(--color-text-muted)" }}
          >
            Looking for an automation engineer, AI integration specialist, or
            full-stack developer? Whether it is a full-time role, a contract
            project, or a freelance engagement, I am ready to ship.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-sm font-mono mt-6"
          style={{ color: "var(--color-text-muted)" }}
        >
          Typical response time: within 24 hours. Ontario, Canada. Remote-ready worldwide.
        </motion.p>
      </div>
    </section>
  );
}
