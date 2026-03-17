"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { fadeUp } from "@/lib/motion";

export default function FinalCTA() {
  return (
    <section id="hire-contact" className="relative py-24 md:py-32 px-6" aria-label="Contact Ryan Wilson - hire a freelance automation engineer and full-stack developer">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Gradient divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mb-16" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-heading font-bold"
          >
            Let&apos;s{" "}
            <span className="text-gradient">Build Something Real</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-text-muted mt-4 max-w-lg mx-auto leading-relaxed"
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
          className="text-center text-sm text-text-muted font-mono mt-6"
        >
          Typical response time: within 24 hours. Ontario, Canada. Remote-ready worldwide.
        </motion.p>
      </div>
    </section>
  );
}
