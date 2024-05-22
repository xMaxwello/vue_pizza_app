/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)'
      },
      translate: ['responsive', 'hover', 'focus', 'group-hover', 'active'],
      fontFamily: {
        'poppins': 'Poppins, sans-serif',
      },
      colors: {
        "card": '#EFE9DE',
        "price": '#3D7627',
        "mainColor": '#001427',
        "redDelete": '#CF4252',
      }
    },
  },
  plugins: [
    require('tailwindcss-filters')
  ],
}

