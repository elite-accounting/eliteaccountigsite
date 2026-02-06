/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2F4F4F',
          dark: '#1E3B3B',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
        },
        text: {
          primary: '#333333',
          secondary: '#666666',
        },
      },
    },
  },
  plugins: [],
}

