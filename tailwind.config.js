module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js", "./layout/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFeatureSettings: {
      numeric: ["tnum", "salt", "ss02"],
    },
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "36px",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
    },
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
