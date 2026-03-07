'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal, Loader2 } from 'lucide-react';

const webhookUrl = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL;
const webhookSecret = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_SECRET;

const inputClass =
    "w-full px-4 py-2.5 rounded-lg bg-surface-light border border-border text-text-primary placeholder:text-text-muted/40 outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200 text-sm";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (!webhookUrl) return;

        setStatus("sending");
        const form = e.currentTarget;
        const data = new FormData(form);

        if (data.get("website")) {
            setStatus("sent");
            return;
        }

        try {
            const res = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": webhookSecret || "",
                },
                body: JSON.stringify({
                    name: data.get("name"),
                    email: data.get("email"),
                    message: data.get("message"),
                    source_page: "hire",
                }),
            });

            if (res.ok) {
                setStatus("sent");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    }

    return (
        <motion.form
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto glass-card p-6 space-y-6"
        >
            {/* Honeypot */}
            <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="absolute opacity-0 h-0 w-0 overflow-hidden"
                aria-hidden="true"
            />

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
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-accent text-accent-on font-semibold font-heading hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {status === "sending" ? (
                    <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                    <>Send Message <SendHorizonal size={18} /></>
                )}
            </button>

            {status === "sent" && (
                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-accent font-mono"
                >
                    Message sent. I&apos;ll get back to you soon.
                </motion.p>
            )}

            {status === "error" && (
                <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm text-red-400 font-mono"
                >
                    Something went wrong. Please try again.
                </motion.p>
            )}
        </motion.form>
    );
}
