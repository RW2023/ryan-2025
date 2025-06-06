'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SendHorizonal } from 'lucide-react';

const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const formspreeAction = formspreeId
    ? `https://formspree.io/f/${formspreeId}`
    : undefined;

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
            className="max-w-xl mx-auto p-6 rounded-2xl shadow-lg space-y-6"
            style={{
                backgroundColor: 'hsl(var(--card-bg))',
                color: 'hsl(var(--text-primary))',
            }}
        >
            {!formspreeAction && (
                <div
                    className="rounded-lg px-4 py-3 text-sm font-medium"
                    style={{
                        backgroundColor: 'hsl(var(--accent))',
                        color: 'white',
                    }}
                >
                    ⚠️ Formspree ID missing. Add <code>NEXT_PUBLIC_FORMSPREE_ID</code> to
                    your `.env.local`.
                </div>
            )}

            <h2
                className="text-3xl font-bold text-center"
                style={{ color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-heading)' }}
            >
                Contact Me
            </h2>

            <div className="form-control space-y-1">
                <label htmlFor="name" className="font-semibold" style={{ color: 'hsl(var(--text-muted))' }}>
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2 rounded-md border outline-none"
                    style={{
                        backgroundColor: 'hsl(var(--surface))',
                        color: 'hsl(var(--text-primary))',
                        borderColor: 'hsl(var(--foreground-muted))',
                    }}
                />
            </div>

            <div className="form-control space-y-1">
                <label htmlFor="email" className="font-semibold" style={{ color: 'hsl(var(--text-muted))' }}>
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2 rounded-md border outline-none"
                    style={{
                        backgroundColor: 'hsl(var(--surface))',
                        color: 'hsl(var(--text-primary))',
                        borderColor: 'hsl(var(--foreground-muted))',
                    }}
                />
            </div>

            <div className="form-control space-y-1">
                <label htmlFor="message" className="font-semibold" style={{ color: 'hsl(var(--text-muted))' }}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full px-4 py-2 rounded-md border outline-none"
                    style={{
                        backgroundColor: 'hsl(var(--surface))',
                        color: 'hsl(var(--text-primary))',
                        borderColor: 'hsl(var(--foreground-muted))',
                    }}
                />
            </div>

            <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 font-semibold py-3 px-4 rounded-md transition"
                style={{
                    backgroundColor: 'hsl(var(--primary))',
                    color: 'white',
                }}
            >
                Send Message <SendHorizonal size={18} />
            </button>

            {submitted && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-4 text-center text-sm font-medium"
                    style={{
                        backgroundColor: 'hsl(var(--accent-color))',
                        color: 'white',
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                    }}
                >
                    ✅ Your message has been sent!
                </motion.div>
            )}
        </motion.form>
    );
}
