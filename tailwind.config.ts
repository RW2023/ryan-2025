// tailwind.config.ts
import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Include MDX files in the content directory for Tailwind class scanning
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--bg) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        'text-primary': "hsl(var(--text-primary) / <alpha-value>)",
        'text-muted': "hsl(var(--text-muted) / <alpha-value>)"
      }
    }
  },
  plugins: [daisyui],
  daisyui: {
    themes: false
  }
} satisfies Config;