// tailwind.config.ts
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // your extensions here…
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
  },
} satisfies Config & {
  daisyui: {
    themes: string[];
    darkTheme: string;
  };
};

export default config;
