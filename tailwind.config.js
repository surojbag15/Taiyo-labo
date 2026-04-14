/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        philosopher: ["Philosopher", "serif"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      maxWidth: {
        nav: "1650px",
        container: "1400px",
      },
      backgroundImage: {
        banner: "url('../image/banner-bg.png')",
      },
    },
  },
  plugins: [],
};
