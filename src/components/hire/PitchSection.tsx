"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function PitchSection() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto space-y-6"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
                Ready to Make It Real?
            </h2>
            <p className="text-lg md:text-xl text-center text-base-content/80 max-w-2xl mx-auto">
                Let’s chat about your goals, your vision, and how we can bring it to life without the tech headaches. I’ll take care of the code so you can focus on what you do best.
            </p>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex justify-center"
            >
                <Mail className="text-primary animate-pulse w-8 h-8" />
            </motion.div>
            <div className="max-w-2xl mx-auto pb-0">
                <ContactForm />
            </div>
        </motion.section>
    );
}
