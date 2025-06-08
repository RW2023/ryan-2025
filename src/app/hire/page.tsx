// app/hire/page.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ListMotion, ItemMotion } from "@/components/ListMotion";

export default function HireMePage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100 text-base-content px-6 pt-24 pb-32 space-y-24">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto space-y-6"
            >
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight text-primary flex items-center justify-center gap-3">
                    <Sparkles className="text-yellow-500 dark:text-yellow-400 animate-bounce" size={36} />
                    Your Website Should Work as Hard as You Do
                </h1>
                <p className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto">
                    Don’t have a website yet? Or maybe your current one feels outdated or slow? Either way, you&apos;re missing out on opportunities to connect with customers, build trust, and grow your business.
                </p>
                <p className="text-xl md:text-2xl text-base-content/80 max-w-2xl mx-auto">
                    I design clean, professional websites that look great on any device  and work fast. No tech talk, no stress. Just a beautiful online presence that helps you stand out and get results.
                </p>
            </motion.section>

            {/* Benefits Section */}
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-box p-10 backdrop-blur-md bg-opacity-90"
            >
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Here’s What You Get
                </h2>
                <ListMotion className="text-left space-y-4 text-base-content/90">
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        ⚡ Loads fast and looks great on phones and desktops
                    </ItemMotion>
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        🎯 Easy for people (and Google) to find you
                    </ItemMotion>
                    <ItemMotion>
                        <CheckCircle className="inline w-5 h-5 text-success mr-2" />
                        📈 Ready to grow with your business over time
                    </ItemMotion>
                </ListMotion>
            </motion.section>

            {/* Pitch + Contact */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto space-y-6"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-center">
                    Ready to Make It Real?
                </h2>
                <p className="text-lg md:text-xl text-center text-base-content/80 max-w-2xl mx-auto">
                    Let’s chat about your goals, your vision, and how we can bring it to life without the tech headaches. I’ll take care of the code so you can focus on what you do best.
                </p>
                <div className="flex justify-center">
                    <Mail className="text-primary animate-pulse w-8 h-8" />
                </div>
                <div className="mt-6">
                    <ContactForm />
                </div>
            </motion.section>
        </main>
    );
}
