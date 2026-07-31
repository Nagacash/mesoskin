/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-marcellus)",
      secondary: "var(--font-montserrat)",
      intertight: "var(--font-inter-tight)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F1F1F", // Sharp, Premium Black
        },
        secondary: {
          DEFAULT: "#FCFBF9", // Clean, Warm White
          100: "#E8DCD5", // Pale Sand
        },
        accent: {
          DEFAULT: "#C5A085", // Bronze/Latte
          100: "#E8DCD5", // Pale Sand
          soft: "#F5F0EB", // Soft Linen
        },
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
};
