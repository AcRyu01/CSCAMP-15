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
      colors:{
        transparent: 'transparent',
        correct:'currentColor',
        'jungle-green': {
          '50': '#f2fbf8',
          '100': '#d2f5ec',
          '200': '#a4ebd8',
          '300': '#6fd9c1',
          '400': '#41c0a8',
          '500': '#2cb49c',
          '600': '#1e8373',
          '700': '#1c695e',
          '800': '#1a554d',
          '900': '#1a4741',
        },
        'jungle-mist': {
          '50': '#f5f9fa',
          '100': '#eaf1f4',
          '200': '#d0e2e7',
          '300': '#accdd4',
          '400': '#78adb8',
          '500': '#5794a0',
          '600': '#447985',
          '700': '#38626c',
          '800': '#31525b',
          '900': '#2d464d',
        },
        'domino': {
          '50': '#f6f4f0',
          '100': '#e8e5d9',
          '200': '#d3cab5',
          '300': '#b9ab8b',
          '400': '#a4906b',
          '500': '#957e5c',
          '600': '#80684e',
          '700': '#685240',
          '800': '#59453a',
          '900': '#4e3d35',
        },
        'concrete': {
          '50': '#f8f8f8',
          '100': '#f2f2f2',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
        },
      }
    },
  },
  plugins: [],
};
