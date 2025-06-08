'use client';

export default function Footer() {
    return (
        <footer
            className="mt-20 py-8 text-sm border-t shadow-lg shadow-black/10  text-foreground border-foreground-muted/10 bg-[var(--card-bg,_white)] text-[var(--foreground,_black)]  "
        >
            <div className="container mx-auto px-4 text-center space-y-2">
            <p className="text-foreground-muted">
                Built with&nbsp;Next.js,&nbsp;Tailwind&nbsp;CSS, and&nbsp;Love&nbsp;💖
            </p>
            <p className="text-foreground-muted/60">
                © {new Date().getFullYear()} Ryan&nbsp;Wilson. All rights reserved.
            </p>
            </div>
        </footer>
    );
}
