/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#222",
      secondary: "#ac1c13",
      third: "#eee5e9",
      fourth: "#247ba0",
      fifth: "#5fbb97",
    },
  },
  plugins: [],
};
