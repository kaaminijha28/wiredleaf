import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Hardcoded colors for consistency with the hero section's gradients
        purple: {
          300: "#d8b4fe", // Example purple from hero gradient
          400: "#c084fc", // Example purple from hero gradient
          500: "#a855f7", // Example purple from hero gradient
          600: "#9333ea", // Example purple from hero gradient
          700: "#7e22ce", // Example purple from hero gradient
        },
        orange: {
          200: "#fed7aa", // Example orange from hero gradient
          400: "#fb923c", // Example orange from hero gradient
        },
        zinc: {
          300: "#d4d4d8", // Example zinc from hero gradient
        },
        gray: {
          300: "#d1d5db", // Example gray from hero text
          400: "#9ca3af", // Example gray from hero text
          500: "#6b7280", // Example gray from hero text
          700: "#374151", // Example gray from input borders
          900: "#18181b", // Neutral-900 for dark backgrounds
          950: "#0a0a0a", // Neutral-950 for darkest backgrounds
        },
        white: {
          DEFAULT: "#ffffff",
        },
        green: {
          400: "#4ade80", // Example green for success messages/icons
        },
        red: {
          400: "#f87171", // Example red for error messages
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ripple: {
          from: { transform: "translate(-50%, -50%) scale(0)", opacity: "1" },
          to: { transform: "translate(-50%, -50%) scale(4)", opacity: "0" }, // Increased scale for bigger size
        },
        "animate-grid": {
          from: { transform: "rotateX(35deg) translateY(0)" },
          to: { transform: "rotateX(35deg) translateY(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ripple: "ripple 0.5s ease-out forwards", // Faster timing (0.5s)
        grid: "animate-grid 60s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
