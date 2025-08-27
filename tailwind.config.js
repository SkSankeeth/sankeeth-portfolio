/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          purple: '#8A2BE2',
          blue: '#00D1FF',
          indigo: '#4F46E5',
          fuchsia: '#F0ABFC',
          cyan: '#22D3EE',
        },
        surface: {
          900: '#0B0B12',
          800: '#0F1020',
          700: '#14162B',
        },
      },
      boxShadow: {
        'neon-blue': '0 0 10px #00D1FF, 0 0 20px #00D1FF',
        'neon-purple': '0 0 10px #8A2BE2, 0 0 20px #8A2BE2',
      },
      backgroundImage: {
        'grid-dark': 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}


