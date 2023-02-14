/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        'bleu-200': '#5273A7',
        'bleu-300': '#395179',
        'bleu-400': '#0D2F66',
        'bleu-500': '#001D4A',
        'jaune-500': '#FFCD00',
        'taupe-500': '#54514D'
      }
    },
  },
  plugins: [],
};
