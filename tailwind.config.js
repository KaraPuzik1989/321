/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      colors: {
        "main-color": "#333",
        "secondary-color": "#1C69DB",
      },
      backgroundImage: {
        aboutUs: "url('/src/img/aboutUs.png')",
        hero: "url('/src/img/bg.png')"
      },
      boxShadow: {
        location: "0px 20px 40px 0px rgba(28, 105, 219, 0.25)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "393px",
          },
          "@screen md": {
            maxWidth: "428px",
          },
          "@screen lg": {
            maxWidth: "1000px",
          },
          "@screen xl": {
            maxWidth: "1160px",
          },
        },
      });
    },
  ],
};
