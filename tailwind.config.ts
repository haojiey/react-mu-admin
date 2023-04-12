/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          from: {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle .6s ease-in-out 0s'
      }
    }
  },
  plugins: []
}
