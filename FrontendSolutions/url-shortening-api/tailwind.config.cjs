/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: `600px`,
        xxl: `1700px`
      },
    },
  },
  plugins: [],
};
