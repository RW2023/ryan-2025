// ✅ app/hire/page.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Button from "@/components/Button";
import ContactForm from "@/components/ContactForm";
import { ListMotion, ItemMotion } from "@/components/ListMotion";

export default function HireMePage() {
    return (
        <section className="min-h-screen flex flex-col items-center text-center px-6 py-20 bg-background text-base-content">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl space-y-6"
            >
                <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] tracking-tight flex items-center justify-center gap-3 text-primary">
                    <Sparkles size={32} className="text-yellow-500 dark:text-yellow-400" />
                    Your Website Should Work as Hard as You Do
                </h1>

                <p className="text-lg md:text-xl text-base-content/80">
                    Don’t have a website yet? Or maybe your current one feels outdated or slow? Either way, you&apos;re missing out on opportunities to connect with customers, build trust, and grow your business.
                </p>

                <p className="text-lg md:text-xl text-base-content/80 mt-4">
                    I design clean, professional websites that look great on any device  and work fast. No tech talk, no stress. Just a beautiful online presence that helps you stand out and get results.
                </p>

                <ListMotion className="text-left text-base list-inside space-y-3 text-base-content/80 mt-6">
                    <ItemMotion>⚡ Loads fast and looks great on phones and desktops</ItemMotion>
                    <ItemMotion>🎯 Easy for people (and Google) to find you</ItemMotion>
                    <ItemMotion>📈 Ready to grow with your business over time</ItemMotion>
                </ListMotion>
            </motion.div>

            {/* Contact Form comes BEFORE buttons */}
            <div className="mt-16 w-full px-4">
                <ContactForm />
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                    href="/projects"
                    label="See My Work"
                    variant="outline"
                    size="lg"
                    icon
                />
            </div>
        </section>
    );
}
