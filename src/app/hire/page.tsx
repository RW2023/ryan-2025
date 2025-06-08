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
                <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight flex items-center justify-center gap-3 text-primary">
                    <Sparkles size={32} className="text-yellow-500 dark:text-yellow-400" />
                    Your Website Should Work as Hard as You Do
                </h1>

                <p className="text-lg md:text-xl text-base-content/80">
                    Struggling with a slow or outdated site that doesn’t reflect your brand? You’re not alone  many creatives and small businesses lose traffic, trust, and sales because of underperforming websites.
                </p>

                <p className="text-lg md:text-xl text-base-content/80 mt-4">
                    I build modern, responsive websites using tools like Next.js, Tailwind CSS, Firebase, and Supabase designed for speed, SEO, and serious results. Let’s turn your vision into something people can’t ignore.
                </p>

                <ListMotion className="text-left text-base list-inside space-y-3 text-base-content/80 mt-6">
                    <ItemMotion>⚡ Lightning-fast, mobile-first performance</ItemMotion>
                    <ItemMotion>🎯 SEO-optimized, accessible, and user-friendly</ItemMotion>
                    <ItemMotion>📈 Built for scale, growth, and long-term success</ItemMotion>
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
