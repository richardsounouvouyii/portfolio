/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          light: '#ffffff',
          dark: '#0b0f19',
        },
        text: {
          light: '#0b0f19',
          dark: '#e5e7eb',
        },
        primary: {
          DEFAULT: '#6ee7b7',
          dark: '#34d399',
        },
      },
    },
  },
  plugins: []
};
