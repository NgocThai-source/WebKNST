/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E91E63",
        secondary: "#F9F8F7",
        textDark: "#333",
        lightPink: "#FEE4EA",
        babyBlue: "#82B0D9",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
  mode: 'jit',
} 