'use client';

export default function Footer() {
    return (
        <footer
            className="mt-20 py-8 text-sm border-t shadow-lg shadow-black/10"
            /* mirror Navbar palette */
            style={{
                backgroundColor: 'hsl(var(--card-bg))',
                color: 'hsl(var(--foreground))',
                borderColor: 'hsl(var(--foreground-muted) / 0.1)',
            }}
        >
            <div className="container mx-auto px-4 text-center space-y-2">
                <p style={{ color: 'hsl(var(--foreground-muted))' }}>
                    Built with&nbsp;Next.js,&nbsp;Tailwind&nbsp;CSS, and&nbsp;Love&nbsp;💖
                </p>
                <p style={{ color: 'hsl(var(--foreground-muted) / 0.6)' }}>
                    © {new Date().getFullYear()} Ryan&nbsp;Wilson. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
