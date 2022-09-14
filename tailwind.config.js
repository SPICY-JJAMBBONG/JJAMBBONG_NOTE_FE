/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js, jsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#F8E9A1",
      red: "#F76C6C",
      skyblue: "#A8D0E6",
      blue: "#374785",
      indigo: "#24305E",
      gray: colors.gray,
    },
  },
  plugins: [require("daisyui")],
};
