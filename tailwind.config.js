/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode:'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
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
        'robot': "url('../img/robot.jpg')",
        'imu1': "url('../img/imu1.jpg')",
        'imu2': "url('../img/imu2.jpg')",
        'bionic': "url('../img/bionic.jpg')",
        'programacion': "url('../img/programacion.jpg')",
        'dolor': "url('../img/dolor.jpg')",
        'protesis': "url('../img/protesis.jpg')",
        '3d': "url('../img/impresion 3d.jpg')",
        'data': "url('../img/data.jpg')",
        'space': "url('../img/space.jpg')",
        'imp3d': "url('../img/imp3d.jpg')",
        'antenas': "url('../img/antenas.jpg')",
        'space_program': "url('../img/space_prom.jpg')",
        'robot_desktop': "url('../img/robot_desktop.jpg')",

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

  plugins: [],
};


