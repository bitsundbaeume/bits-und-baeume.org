module.exports = {
  // mode: 'jit',
  purge: ['./src/**/*.njk', './src/**/*.ejs', './src/**/*.md', './src/**/*.liquid'],
  theme: {
    colors: {
      black: '#000',
      white: '#FFF',
      grey: '##F8F8F8',
      green: {
        light: '#C1D98D',
        middle: '#A1C854',
      },
      yellow: {
        light: '#f5d56f',
        middle: '#efb638',
      },
      blue: {
        light: '#D0DEE7',
        dark: '#233C78',
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Helvetica Neue',
        'Arial',
        'sans-serif',
      ],
    },
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover'],
    },
  },
  plugins: [],
};
