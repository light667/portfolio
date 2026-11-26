/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          900: '#4C1D95',
        },
        flame: {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        ink: '#1E1B4B',
        cream: '#FEFCE8',
        night: '#0C0C0C',
        carbon: '#141414',
        mist: '#D7E2EA',
        steel: '#646973',
        plum: '#18011F',
        magenta: '#B600A8',
        grape: '#7621B0',
        ember: '#BE4C00',
      },
      fontFamily: {
        display: ['Kanit', 'system-ui', 'sans-serif'],
        sans: ['Kanit', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        hard: '4px 4px 0 #1E1B4B',
        'hard-sm': '3px 3px 0 #1E1B4B',
        'hard-lg': '8px 8px 0 #1E1B4B',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { top: '0%', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        flow: {
          to: { strokeDashoffset: '-24' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bar: {
          '0%, 100%': { transform: 'scaleY(0.35)' },
          '50%': { transform: 'scaleY(1)' },
        },
        sweep: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(400%)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-reverse': 'marquee 45s linear infinite reverse',
        scan: 'scan 3.6s ease-in-out infinite',
        flow: 'flow 0.8s linear infinite',
        float: 'float 4s ease-in-out infinite',
        bar: 'bar 1.6s ease-in-out infinite',
        sweep: 'sweep 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
