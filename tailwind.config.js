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
      backgroungImage:{
        'pragram-paper':"url('/assete/image/paper.png')"
      },
      colors:{
        transparent: 'transparent',
        correct:'currentColor',
        'tiber': {
          '50': '#effefd',
          '100': '#c7fffd',
          '200': '#8ffffc',
          '300': '#4ff7f9',
          '400': '#1bdee6',
          '500': '#02bfca',
          '600': '#0097a3',
          '700': '#047681',
          '800': '#085e67',
          '900': '#09383d',
        },
        'tundora': {
          '50': '#f7f7f7',
          '100': '#e3e3e3',
          '200': '#c8c8c8',
          '300': '#a4a4a4',
          '400': '#818181',
          '500': '#666666',
          '600': '#515151',
          '700': '#454545',
          '800': '#383838',
          '900': '#313131',
        },
        'soft-amber': {
          '50': '#f9f7f3',
          '100': '#f0eee4',
          '200': '#e0dac8',
          '300': '#d2c9b0',
          '400': '#b6a581',
          '500': '#a89167',
          '600': '#9a7f5c',
          '700': '#81684d',
          '800': '#695543',
          '900': '#564738',
        },
        'bison-hide': {
          '50': '#f8f7f4',
          '100': '#eeede6',
          '200': '#dcd9cc',
          '300': '#bfb7a1',
          '400': '#aea289',
          '500': '#9e8d71',
          '600': '#917e65',
          '700': '#796855',
          '800': '#635549',
          '900': '#51463d',
        },
        'mineral-green': {
          '50': '#f3f6f4',
          '100': '#e1eae3',
          '200': '#c4d6ca',
          '300': '#9db8a7',
          '400': '#71967f',
          '500': '#517862',
          '600': '#395847',
          '700': '#314b3e',
          '800': '#283d32',
          '900': '#22322a',
        },

      }
    },
  },
  plugins: [],
};
