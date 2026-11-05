/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F3F4F0",
          dark: "#12181A",
        },
        ink: {
          DEFAULT: "#1B2430",
          soft: "#4A5560",
          dark: "#E7E9E4",
        },
        teal: {
          50: "#EAF2F1",
          100: "#CFE1DE",
          400: "#1F6E64",
          500: "#146B5C",
          600: "#0F3D3E",
          700: "#0A2C2D",
        },
        marigold: {
          50: "#FBF2DF",
          400: "#EDB955",
          500: "#E2A63B",
          600: "#C4872A",
        },
        coral: {
          400: "#E88E78",
          500: "#E2725B",
          600: "#C65941",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,61,62,0.06), 0 8px 24px -8px rgba(15,61,62,0.15)",
        cardHover: "0 4px 8px rgba(15,61,62,0.08), 0 16px 40px -12px rgba(15,61,62,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
