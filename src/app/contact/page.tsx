import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
    return (
        <main
            className="min-h-screen px-4 py-16"
            style={{
                backgroundColor: 'hsl(var(--bg))',
                color: 'hsl(var(--text-primary))',
                fontFamily: 'var(--font-sans)',
            }}
        >
            <div className="max-w-3xl mx-auto">
                <section className="mb-10 text-center space-y-4">
                    <h1
                        className="text-4xl md:text-5xl font-bold"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        Get in Touch
                    </h1>
                    <p
                        className="text-lg leading-relaxed max-w-prose mx-auto"
                        style={{ color: 'hsl(var(--text-muted))' }}
                    >
                        Have a question, comment, or collaboration in mind? Drop a message using the form below and we’ll get back to you as soon as possible.
                    </p>
                </section>

                <ContactForm />
            </div>
        </main>
    );
}
