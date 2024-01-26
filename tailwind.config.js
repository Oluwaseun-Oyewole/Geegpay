/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparentGrey: "#FAFAFA",
        gray200: "#E5EAEF",
        gray400: "#A3A3A3",
        primary: "#F7F8FA",
        secondary: "#9CA4AB",
        black: "#212121",
        primaryBlack: "#2C2C2C",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Jakata: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
