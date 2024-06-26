/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "san-serif"]
      },
      colors: {
        "primary-1": "rgb(var(--primary-1))",
        "primary-2": "rgb(var(--primary-2))",
        "secondary-1": "rgb(var(--secondary-1))",
        "background-1": "rgb(var(--background-1))"
      }
    }
  },
  plugins: []
}