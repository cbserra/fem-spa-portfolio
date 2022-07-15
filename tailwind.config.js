// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {},
    colors: {
      "galactic-blue": "hsl(252, 66%, 62%)",
      'summer-yellow': "hsl(28, 89%, 67%)",
      'pink': "hsl(0, 78%, 79%)",
      'light-red': "hsl(7, 77%, 66%)",
      'cyan': "hsl(172, 46%, 57%)",
      'burgundy': "hsl(314, 45%, 23%)",
      'black': "hsl(0, 0%, 1%)",
      "medium-brown": "hsl(30, 5%, 45%)",
      "light-cream": "hsl(28, 100%, 97%)",
    },
    backgroundImage: {
      'graphic-design': 'url("./pattern-graphic-design.svg")',
      'illustrations': 'url("./pattern-illustrations.svg")',
      'apps': 'url("./pattern-apps.svg")',
      'motion-graphics': 'url("./pattern-motion-graphics.svg")',
      'photography': 'url("./pattern-photography.svg")',
      'ui-ux': 'url("./pattern-ui-ux.svg")',
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      xl: [
        "36px",
        {
          lineHeight: "45px",
        },
      ],
      body: [
        "16px",
        {
          lineHeight: "26px",
        },
      ],
      sm: [
         '14px', {
          lineHeight: '28px',
         }
      ],
      md: [
        '24px', {
          lineHeight: '30px',
        }
      ],
      lg: [
        '26px', {
          lineHeight: '33px',
        }
      ],
    },
  },
  plugins: [],
};
