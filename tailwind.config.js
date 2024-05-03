/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      colors: {
        "card": '#EFE9DE',
        "price": '#3D7627',
        "mainColor": '#001427',
      }
    },
  },
  plugins: [],
}

