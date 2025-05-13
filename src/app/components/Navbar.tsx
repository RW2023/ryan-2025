"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((o) => !o);

    return (
        <nav className="bg-bg/100 bg-opacity-100 sticky top-0 z-50 border-b border-surface shadow-lg shadow-black/10 dark:bg-[hsl(196,39%,12%)]">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo / Brand */}
                <Link href="/" className="text-xl font-bold text-primary">
                    Ryan Wilson
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="py-2 px-3 text-text-primary hover:text-accent transition font-medium"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobile}
                    className="lg:hidden p-2 focus:outline-none text-text-primary"
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {/* Mobile Slide-Out */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ x: "100%", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: "100%", opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="lg:hidden bg-bg/100 bg-opacity-100 shadow-inner border-t border-surface dark:bg-[hsl(196,39%,12%)]"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-medium text-text-primary hover:text-accent"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <DarkModeToggle />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
