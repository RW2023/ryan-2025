"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "@/components/DarkModeToggle";

const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const toggleMobile = () => setMobileOpen((o) => !o);

    return (
        <nav className="bg-[var(--card-bg,_white)] text-[var(--foreground,_black)] sticky top-0 z-50 border-b border-[var(--foreground,_#ccc)]/10 shadow-lg shadow-black/10">
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
                            className="py-2 px-3 font-medium hover:text-accent text-[var(--foreground,_black)]"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <DarkModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMobile}
                    className="lg:hidden p-2 focus:outline-none text-[var(--foreground,_black)]"
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
                        className="lg:hidden bg-[var(--card-bg,_white)] text-[var(--foreground,_black)] shadow-inner border-t border-[var(--foreground,_#ccc)]/10"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block text-lg font-medium hover:text-accent text-[var(--foreground,_black)]"
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