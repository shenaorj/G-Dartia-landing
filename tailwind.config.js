/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0.109em',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.25em',
      },
      backgroundImage: {
        'robot': "url('../img/robot.webp')",
        'imu1': "url('../img/imu1.webp')",
        'imu2': "url('../img/imu2.webp')",
        'bionic': "url('../img/bionic.webp')",
        'programacion': "url('../img/programacion.webp')",
        'dolor': "url('../img/dolor.webp')",
        'protesis': "url('../img/protesis.webp')",
        '3d': "url('../img/impresion-3d.webp')",
        'data': "url('../img/data.webp')",
        'space': "url('../img/space.webp')",
        'imp3d': "url('../img/imp3d.webp')",
        'antenas': "url('../img/antenas.webp')",
        'space_program': "url('../img/space_prom.webp')",
        'robot_desktop': "url('../img/robot_desktop.webp')",
        'jonathan': "url('../img/jonathan-vasquez.webp')",
        'julian': "url('../img/julian-marquez-cubides.webp')",
        'julian E': "url('../img/eduardo-marquez.webp')",
        'santiago': "url('../img/santiago-hv.webp')",

      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#E74926',
        'secondary': '#7C7B7B',
        'terciary': '#9C9B9B',
      }),
      textColor: {
        'primary': '#E74926',
        'secondary': '#7C7B7B',
        'terciary': '#9C9B9B',
      },
      ringColor:{
        'primary': '#E74926',
        'secondary': '#7C7B7B',
        'terciary': '#9C9B9B',
      },
      fontFamily: {
        Avernir: ['Avenir Next Light'],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backface-visible': {
          'backface-visibility': 'visible',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.text-size-adjust': {
          'text-size-adjust': '100%',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};


