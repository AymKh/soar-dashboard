import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EDF3F7',
          100: '#8BA3CB',
          200: '#343C',
          300: '#396AFF',
        },
        secondary: {
          50: '#FFFFFF',
          100: '#F5F7FA',
          200: '#E6EFF5',
        },
        accent: {
          50: '#232323',
          100: '#000000',
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
