/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   primary: "#ffffff",
    //   // fontPoppins: "Poppins",
    //   main: "#848fac",
    //   blue: "#192252",
    //   softBlue: "#103f74",
    //   borderColor: "#c5d0e6",
    // },
    extend: {
      colors: {
        primary: "#ffffff",
        // fontPoppins: "Poppins",
        main: "#848fac",
        blue: "#192252",
        softBlue: "#103f74",
        borderColor: "#c5d0e6",
      },
    },
  },
  plugins: [],
};
