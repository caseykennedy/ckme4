import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./**/*.{ts,tsx}"],
  theme: {
    container: {
      center: false,
      padding: {
        DEFAULT: "0",
      },
      screens: {},
    },
    extend: {
      colors: {
        frost: {
          100: "hsla(221, 17%, 86%, 1)",
          200: "hsla(221, 17%, 78%, 1)",
          300: "hsla(221, 17%, 69%, 1)",
          400: "hsla(221, 17%, 63%, 1)",
          500: "hsla(221, 17%, 57%, 1)",
          600: "hsla(221, 17%, 51%, 1)",
          700: "hsla(221, 17%, 44%, 1)",
          800: "hsla(221, 17%, 33%, 1)",
          900: "hsla(221, 17%, 17%, 1)",
          950: "hsla(221, 17%, 6%, 1)",
        },
      },
      maxWidth: {
        site: "var(--site-width)",
      },
      fontFamily: {
        sans: ["var(--font-NBInternational)", "Arial", ...fontFamily.sans],
      },
      fontSize: {},
      transitionDuration: {
        DEFAULT: "200ms",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
