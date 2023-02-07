const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {
      'main-purple': '#635FC7',
      'main-purple-hover': '#A8A4FF',
      'black': '#000112',
      'v-dark-gray': '#20212C',
      'd-gray': '#2B2C37',
      'd-lines': '#3E3F4E',
      'm-gray': '#828FA3',
      'l-lines': '#E4EBFA',
      'l-gray': '#F4F7FD',
      'white': '#FFFFFF',
      'red': '#EA5555',
      'red-hover': '#FF9898',
      'filter': 'rgba(0, 0, 0, 0.5)'
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    
    extend: {
      spacing: {
        '70': '280px',
        '120': '480px',
        '131': '524px'
      },
      boxShadow: {
        'task': '0 4px 6px rgba(54, 78, 126, 0.1)'
      },
      fontSize: {
        '15': '15px'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 0 16px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
