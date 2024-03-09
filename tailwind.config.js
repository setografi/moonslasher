/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blackBar: "#11101A",
        orangeTextBar: "#FFC12F",
        whiteTextBar: "#FFFFFF",
        blackBarTwo: "#3D3C4F",
        toolbarBlack: "#282938",
      },

      fontFamily: {
        samsungSharp: ["Samsung Sharp Sans", "sans-serif"],
        sfPro: ["SF Pro Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
