/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1a1a1a',
        gray: '#2d2d2d',
        purple: '#6c63ff',
        white: '#ffffff',
      },
      backgroundImage: {
        'dark-gradient': 'linear-gradient(135deg, #1a1a1a, #2d2d2d, #6c63ff)',
      },
    },
  },
  plugins: [],
}
