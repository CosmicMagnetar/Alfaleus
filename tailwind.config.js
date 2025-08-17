/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',      // App Router pages
    './pages/**/*.{js,ts,jsx,tsx}',    // Optional: if using /pages
    './components/**/*.{js,ts,jsx,tsx}', // For shared components
    './public/**/*.html',              // Optional: static HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // optional font
      },
      colors: {
        alfablue: '#1456F0',           // Optional: your custom brand color
      },
    },
  },
  plugins: [],
};
