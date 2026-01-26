import type { Config } from "tailwindcss";

export default {
  content: [

     "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      animation: {
        splash: 'splash 18s ease-in-out infinite',
        'splash-delay': 'splash 22s ease-in-out infinite',
        'splash-slow': 'splash 28s ease-in-out infinite',
        float: 'float 10s ease-in-out infinite',
        'float-slow': 'float 16s ease-in-out infinite',
        'float-fast': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        splash: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(80px,-60px) scale(1.2)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-60px)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;