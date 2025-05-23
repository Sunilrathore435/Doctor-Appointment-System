/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#5f6FFF",
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
      animation: {
        zoomFade: 'zoomFade 1s ease-in-out forwards',
        fadeSlideUp: 'fadeSlideUp 1s ease forwards',
        fadeIn: 'fadeIn 10s ease-out both', // ✅ New fadeIn animation
      },
      keyframes: {
        zoomFade: {
          '0%': {
            opacity: '1',
            transform: 'scale(0.85)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        fadeSlideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: { // ✅ New fadeIn keyframes
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}