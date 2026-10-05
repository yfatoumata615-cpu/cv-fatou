/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0A14',
        accent: '#7B61FF',
        background: '#F0EFF4',
        card: '#18181B'
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        instrument: ['"Instrument Serif"', 'serif'],
        fira: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '2xl': '2rem',
        '3xl': '3rem',
      }
    },
  },
  plugins: [],
}
