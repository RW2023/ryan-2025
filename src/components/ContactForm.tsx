'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [status, setStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) throw new Error('Network response was not ok');

            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error('Submit error:', error);
            setStatus('error');
        }
    };

    const handleInputChange = (
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setter(e.target.value);
    };

    return (
        <section id="contact" className="py-20 px-4 text-center bg-background">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2 mb-4">
                <Mail /> Contact
            </h2>
            <p className="max-w-md mx-auto text-foreground-muted mb-6">
                Interested in collaborating? Reach out and let&apos;s build something great.
            </p>
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleInputChange(setName)}
                    required
                    className="input input-bordered w-full"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleInputChange(setEmail)}
                    required
                    className="input input-bordered w-full"
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={handleInputChange(setMessage)}
                    required
                    className="textarea textarea-bordered w-full"
                />
                <div className="text-right">
                    <button
                        type="submit"
                        className="btn btn-primary btn-md inline-flex items-center"
                        disabled={status === 'sending'}
                    >
                        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                </div>
            </form>
            {status === 'success' && (
                <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {status === 'error' && (
                <p className="mt-4 text-red-600">There was an error sending your message.</p>
            )}
        </section>
    );
}
