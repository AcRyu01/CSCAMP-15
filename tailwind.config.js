const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-sukhumvitSet)"],
        // primary: ["var(--font-sukhumvitSet)", ...fontFamily.sans],
      },
      dropShadow: {
        island: "0px 0px 40px 15px rgba(255,246,74,0.75)",
      },
    },
  },
  plugins: [],
};
