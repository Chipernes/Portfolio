/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['IBM Plex Mono', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      colors: {
        main: '#9C9C9C',
        heading: '#ffffff',
      },
    },
  },
  plugins: [],
}

