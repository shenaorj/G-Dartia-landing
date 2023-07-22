/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
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
      fontFamily: {
        Avernir: ['Avenir Next LT Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


