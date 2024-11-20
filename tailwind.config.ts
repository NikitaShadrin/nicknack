import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darker: 'var(--darker)',
        main_text: 'var(--main-text)',
        accent: 'var(--accent)',
        dark: 'var(--dark)'
      },
    },
  },
  plugins: [],
};

export default config;
