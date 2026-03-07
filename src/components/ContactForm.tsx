'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const formspreeAction = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : undefined;

const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            action={formspreeAction}
            method="POST"
            target="_blank"
            onSubmit={() => setSubmitted(true)}
            className="max-w-xl mx-auto glass-card p-6 space-y-6"
        >
            {!formspreeAction && (
                <div className="rounded-lg px-4 py-3 text-sm font-medium bg-secondary/10 text-secondary border border-secondary/20">
                    Formspree ID missing. Add <code className="font-mono">NEXT_PUBLIC_FORMSPREE_ID</code> to your <code className="font-mono">.env.local</code>.
                </div>
            )}

            <h2 className="text-3xl font-bold text-center font-heading text-text-bright">
                Contact Me
            </h2>

            <div className="space-y-1.5">
                <label htmlFor="hire-name" className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    Name
                </label>
                <input
                    id="hire-name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className={inputClass}
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="hire-email" className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    Email
                </label>
                <input
                    id="hire-email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                />
            </div>

            <div className="space-y-1.5">
                <label htmlFor="hire-message" className="text-xs font-mono text-text-muted uppercase tracking-wider">
                    Message
                </label>
                <textarea
                    id="hire-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className={`${inputClass} resize-none`}
                />
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5"
            >
                Send Message <SendHorizonal size={18} />
            </button>

            {submitted && (
                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-accent font-mono"
                >
                    Message sent. I&apos;ll get back to you soon.
                </motion.p>
            )}
        </motion.form>
    );
}
