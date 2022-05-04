const { guessProductionMode } = require("@ngneat/tailwind");

module.exports = {
  prefix: "",
  purge: {
    enabled: guessProductionMode(),
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        120: "24rem",
        124: "28rem",
        128: "32rem",
        132: "36rem",
        136: "40rem",
        140: "44rem",
      },
    },
  },
  variants: {
    extend: {},
  },
};
