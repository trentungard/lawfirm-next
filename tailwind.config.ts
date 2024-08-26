import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}'
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
      maxWidth: {
        'max-desktop-container-width': 'var(--max-desktop-container-width)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config