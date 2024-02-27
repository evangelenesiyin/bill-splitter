/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        trirong: "Trirong_400Regular",
      },
      fontSize: {
        title: "96px",
      },
      colors: {
        gray: "#F4F4F4",
        darknavy: "#161A30",
        navy: "#31304D",
        beige: "#F0ECE5",
        green: "#60EBA9",
        red: "#D95A5A",
        yellow: "#F4E773",
      },
    },
  },
  plugins: [],
};
