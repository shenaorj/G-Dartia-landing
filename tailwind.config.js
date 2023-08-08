/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode:'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'robot': "url('../img/robot.webp')",
        'imu1': "url('../img/imu1.webp')",
        'imu2': "url('../img/imu2.webp')",
        'bionic': "url('../img/bionic.webp')",
        'programacion': "url('../img/programacion.webp')",
        'dolor': "url('../img/dolor.webp')",
        'protesis': "url('../img/protesis.webp')",
        '3d': "url('../img/impresion 3d.webp')",
        'data': "url('../img/data.webp')",
        'space': "url('../img/space.webp')",
        'imp3d': "url('../img/imp3d.webp')",
        'antenas': "url('../img/antenas.webp')",
        'space_program': "url('../img/space_prom.webp')",
        'robot_desktop': "url('../img/robot_desktop.webp')",

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
        Avernir: ['Avenir Next LT Pro', 'sans-serif'],
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },

  plugins: [],
};


