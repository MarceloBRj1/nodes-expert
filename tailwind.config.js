/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

