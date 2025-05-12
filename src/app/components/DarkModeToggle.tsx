'use client';

import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <button
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-base-200 transition"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
}
