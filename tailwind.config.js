/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        shirt: {
          DEFAULT: '#D0E4F5',
          light: '#E9F3FC',
          hover: '#BDDDF5',
          dark: '#9AC3E6'
        },
        wood: {
          DEFAULT: '#C88A4A',
          light: '#DAA36B',
          hover: '#B87A38',
          dark: '#995F24'
        },
        leaf: {
          DEFAULT: '#6B8E4E',
          light: '#83A962',
          hover: '#5A7A3E',
          dark: '#486430'
        },
        slate: {
          dark: '#1E293B',
          950: '#0F172A',
          900: '#1E293B',
          850: '#162032',
          800: '#334155',
          700: '#475569',
          600: '#64748B',
          500: '#94A3B8',
          400: '#CBD5E1',
          300: '#E2E8F0',
          200: '#F1F5F9',
          100: '#F8FAFC'
        },
        offwhite: '#F8FAFC',
        cardwhite: '#FFFFFF'
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Oswald', 'sans-serif'],
        signature: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        tighter: '-.05em'
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
