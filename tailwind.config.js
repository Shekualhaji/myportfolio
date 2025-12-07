/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        secondary: '#06b6d4',
        accent: '#0ea5e9',
        dark: '#020617',
        light: '#f8fafc',
        neutral: '#94a3b8',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundColor: {
        glass: 'rgba(15, 23, 42, 0.7)',
      },
      backgroundImage: {
        gradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
      },
    },
  },
  plugins: [],
}