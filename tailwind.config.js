module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["last", "hover", "focus"],
    },
  },
  plugins: [
    require("tailwindcss-font-inter")(),
    require("@tailwindcss/typography"),
  ],
};
