"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import Button from "./Button";

export default function HeroSection() {
  return (
    <section id="hero" className="hero min-h-screen bg-background">
      <div className="hero-content text-center flex-col gap-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="avatar w-36 h-36 md:w-48 md:h-48 rounded-full ring-4 ring-primary"
        >
          <Image
            src="/profile/darkProfile.jpg"
            alt="Profile picture of Ryan"
            fill
            className="object-cover rounded-full border-4 border-[var(--accent-color)]"
            priority
          />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl  font-[var(--font-heading)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hello, I&apos;m Ryan
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl text-base-content/80 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Creating clean, efficient web applications as a full-stack developer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="bg-background/80 backdrop-blur-md p-4 rounded-lg text-primary"
        >
          <Button
            href="/projects"
            label="View Projects"
            variant="success"
            size="lg"
            
            
          />
        </motion.div>

        <motion.div
          className="flex justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <Link
            href="https://github.com/RW2023"
            aria-label="GitHub"
            className="hover:text-primary"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ryan-e-wilson/"
            aria-label="LinkedIn"
            className="hover:text-primary"
          >
            <Linkedin />
          </Link>
          <Link
            href="mailto:hello@ryanwilson.dev"
            aria-label="Email"
            className="hover:text-primary"
          >
            <Mail />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
