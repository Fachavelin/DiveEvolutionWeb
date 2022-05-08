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
        144: "48rem",
        148: "52rem",
        152: "56rem",
        156: "60rem",
        160: "64rem",
        164: "68rem",
        168: "72rem",
        172: "76rem",
        176: "80rem",
        180: "84rem",
        184: "88rem",
      },
    },
    screen: {
      xs: "380px",
    },
  },
  variants: {
    extend: {},
  },
};
