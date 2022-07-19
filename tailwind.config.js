// const colors = require('tailwindcss/colors')

// eslint-disable-next-line no-undef
module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      screens: {
        lg: "1440px",
      },
      fontSize: {
        "body-sm": [
          "16px",
          {
            lineHeight: "26px",
          },
        ],
        "body-md": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        "button-sm": [
          "16px",
          {
            lineHeight: "28px",
          },
        ],
        "button-md": [
          "18px",
          {
            lineHeight: "28px",
          },
        ],
        sm: [
          "14px",
          {
            lineHeight: "28px",
          },
        ],
        md: [
          "24px",
          {
            lineHeight: "30px",
          },
        ],
        lg: [
          "26px",
          {
            lineHeight: "33px",
          },
        ],
        "header-sm": [
          "24px",
          {
            lineHeight: "30px",
          },
        ],
        "header-md": [
          "26px",
          {
            lineHeight: "33px",
          },
        ],
        "header-lg": [
          "32px",
          {
            lineHeight: "40px",
          },
        ],
        "header-xl": [
          "36px",
          {
            lineHeight: "45px",
          },
        ],
        "header-2xl": [
          "40px",
          {
            lineHeight: "51px",
          },
        ],
        "header-3xl": [
          "44px",
          {
            lineHeight: "55px",
          },
        ],
        "header-4xl": [
          "56px",
          {
            lineHeight: "71px",
          },
        ],
      },
    },
    colors: {
      "galactic-blue": "hsl(252, 66%, 62%)",
      "summer-yellow": "hsl(28, 89%, 67%)",
      pink: "hsl(0, 78%, 79%)",
      "light-red": "hsl(7, 77%, 66%)",
      cyan: "hsl(172, 46%, 57%)",
      burgundy: "hsl(314, 45%, 23%)",
      black: "hsl(0, 0%, 1%)",
      "medium-brown": "hsl(30, 5%, 45%)",
      "light-cream": "hsl(28, 100%, 97%)",
      transparent: "transparent",
    },
    backgroundImage: {
      "graphic-design": 'url("./pattern-graphic-design.svg")',
      illustrations: 'url("./pattern-illustrations.svg")',
      apps: 'url("./pattern-apps.svg")',
      "motion-graphics": 'url("./pattern-motion-graphics.svg")',
      photography: 'url("./pattern-photography.svg")',
      "ui-ux": 'url("./pattern-ui-ux.svg")',
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
  },
  plugins: [],
};
