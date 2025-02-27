/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customBlue: '#1e3a8a',    // You can choose any shade of blue
        customPurple: '#6d28d9',  // You can choose any shade of purple
        customGray: '#a2b7bd',    // Provided color
      },
    },
  },
  plugins: [],
}