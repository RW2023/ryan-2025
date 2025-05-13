// tailwind.config.ts
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config: Config & { daisyui: { themes: boolean | string[]; darkTheme?: string } } = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / var(--tw-bg-opacity, 1))",
        surface: "hsl(var(--surface) / var(--tw-bg-opacity, 1))",
        primary: "hsl(var(--primary) / var(--tw-bg-opacity, 1))",
        secondary: "hsl(var(--secondary) / var(--tw-bg-opacity, 1))",
        accent: "hsl(var(--accent) / var(--tw-bg-opacity, 1))",
        "text-primary": "hsl(var(--text-primary) / var(--tw-text-opacity, 1))",
        "text-muted": "hsl(var(--text-muted) / var(--tw-text-opacity, 1))",
        card: "hsl(var(--card-bg) / var(--tw-bg-opacity, 1))",
        "card-hover": "hsl(var(--card-hover) / var(--tw-bg-opacity, 1))",
        foreground: "hsl(var(--foreground) / var(--tw-text-opacity, 1))",
        "foreground-muted": "hsl(var(--foreground-muted) / var(--tw-text-opacity, 1))",
        "accent-color": "hsl(var(--accent-color) / var(--tw-text-opacity, 1))",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        sans: ["var(--font-sans)"],
        accent: ["var(--font-accent)"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: true,
    darkTheme: 'dark',
  },
};

export default config;