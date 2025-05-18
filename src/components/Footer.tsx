// app/components/Footer.tsx
"use client";

export default function Footer() {
    return (
        <footer className="mt-20 border-t border-base-300 bg-base-100 text-base-content py-8 text-sm">
            <div className="container mx-auto px-4 text-center space-y-2">
                <p className="text-base-content/80">
                    Built with Next.js, Tailwind CSS, and Love 💖.
                </p>
                <p className="text-base-content/60">
                    © {new Date().getFullYear()} Ryan Wilson. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
