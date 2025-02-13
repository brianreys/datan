/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2e3959',
        secondary: '#3d4a73',
        accent: '#b4c0d9',
      }
    },
  },
  plugins: [],
};