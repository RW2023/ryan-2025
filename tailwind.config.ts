// tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg) / <alpha-value>)",
        surface: "hsl(var(--surface) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        'text-primary': "hsl(var(--text-primary) / <alpha-value>)",
        'text-muted': "hsl(var(--text-muted) / <alpha-value>)"
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
};

export default config;
