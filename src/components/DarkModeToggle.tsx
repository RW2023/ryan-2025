"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun as SunIcon, Moon as MoonIcon, Laptop as SystemIcon } from "lucide-react";

const modes = ["light", "dark", "system"] as const;
type Mode = typeof modes[number];

export default function DarkModeToggle() {
    const { theme, systemTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid SSR mismatch
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;

    // Determine what’s actually showing
    const realTheme = theme === "system" ? systemTheme : theme;

    // Choose icon
    let Icon = realTheme === "dark" ? MoonIcon : SunIcon;
    if (theme === "system") Icon = SystemIcon;

    // Cycle through modes on click
    const handleClick = () => {
        const nextIndex = (modes.indexOf(theme as Mode) + 1) % modes.length;
        setTheme(modes[nextIndex]);
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Toggle theme"
            className="p-2 hover:opacity-80 transition"
        >
            <Icon size={20} />
        </button>
    );
}
