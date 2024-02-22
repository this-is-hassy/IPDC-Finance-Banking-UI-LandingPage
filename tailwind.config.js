const { transform } = require('next/dist/build/swc')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

     
      colors: {
        pink: "#ED017F",
        black: "#010101",
        dumb_black: "#343434",
        dark_grey: "#676767",
        light_gray: "#999999",
        low_black: "#363940",
      },
      fontSize: {
        "12px": "12px",
        "14px": "14px",
        "16px": "16px",
        "18px": "18px",
        "22px": "22px",
        "36px": "36px",
        "40px": "40px",
      },

      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }                    


    },
  },
//   plugins: {
//     autoprefixer: {},
//     ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
// },

plugins:[],
};
