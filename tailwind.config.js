/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#edfaff',
          100: '#dff7ff',
          200: '#c8f2ff',
          300: '#9fe9ff',
          400: '#8fe3ff',
          500: '#1a6db2',
          600: '#145290',
          700: '#123d66',
          800: '#0d3155',
          900: '#0a2c4a',
          950: '#061d32',
        },
        brand: {
          dark: '#072b58',
          navy: '#072b58',
          primary: '#1ea6dc',
          overlay: 'rgb(30 166 220 / 50%)',
          hover: '#072b58',
          sky: '#1ea6dc',
          accent: '#1ea6dc',
          lightBlue: '#f0f9ff',
          surface: '#ffffff',
        },
        'brand-overlay': 'rgb(30 166 220 / 50%)',
      },
      ringColor: {
        DEFAULT: '#1a6db2',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        fadeIn: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      boxShadow: {
        card: '0 10px 30px -5px rgba(18, 61, 102, 0.07), 0 4px 12px -2px rgba(18, 61, 102, 0.04)',
        elevated: '0 20px 40px -10px rgba(18, 61, 102, 0.12), 0 8px 16px -4px rgba(18, 61, 102, 0.06)',
        subtle: '0 2px 10px rgba(18, 61, 102, 0.04)',
      },
    },
  },
  plugins: [],
}
