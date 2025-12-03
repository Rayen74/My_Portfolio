/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  safelist: [
    'bg-green-100', 'text-green-800',
    'bg-yellow-100', 'text-yellow-800',
    'bg-orange-100', 'text-orange-800',
    'bg-red-100', 'text-red-800',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffeaea',
          100: '#ffd5d5',
          200: '#ffadad',
          300: '#ff7a7a',
          400: '#f64c4c',
          500: '#c71617', // main
          600: '#a81212',
          700: '#8b0f0f',
          800: '#700b0b',
          900: '#5c0909',
          950: '#360505',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-down': 'slideDown 0.3s ease-in-out',
        'neon-glow': 'neon-glow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'neon-glow': {
          '0%, 100%': { boxShadow: '0 0 8px #38BDF8, 0 0 16px #38BDF8' },
          '50%': { boxShadow: '0 0 4px #38BDF8, 0 0 8px #38BDF8' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}