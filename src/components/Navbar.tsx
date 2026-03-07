"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  { name: "Hire Me", href: "/hire" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a
          href="#hero"
          onClick={() => handleClick("#hero")}
          className="font-heading text-lg font-bold text-accent tracking-tight"
        >
          RW<span className="text-text-muted">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </a>
            ) : (
              <button
                key={item.name}
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-text-muted hover:text-accent transition-colors duration-200"
              >
                {item.name}
              </button>
            )
          )}
        </div>

        <div className="flex items-center gap-2">
          <DarkModeToggle />
          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden p-2 text-text-muted hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-border"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-text-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </a>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleClick(item.href)}
                    className="text-left text-base font-medium text-text-muted hover:text-accent transition-colors"
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
