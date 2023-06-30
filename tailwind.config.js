/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html, js}'],
  theme: {
    extend: {
      spacing: {
        'small': '5px',
        'gap': '10px',
        'trim-small': '15px',
        'box-spacing': '20px',
        'trim': '30px',
        'large': '50px',
        'x-large': '80px',
        'big': '100px',
        'x-big': '150px',
      },
      colors: {
        'fundo-01' : '#FEECE0',
        'fundo-02' : '#9B6647',
        'color-01' : '#58190A',
        'color-02' : '#FEECE0',
      },
    },
    fontFamily: {
      sans: ['Source Serif Pro', 'sans-serif']
    },
  },
  plugins: [],
}

