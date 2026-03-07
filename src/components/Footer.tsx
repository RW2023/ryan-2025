"use client";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm font-mono">
          &copy; {new Date().getFullYear()} Ryan Wilson
        </p>
        <p className="text-text-muted/50 text-xs font-mono">
          Built with Next.js &middot; Tailwind CSS &middot; Framer Motion
        </p>
      </div>
    </footer>
  );
}
