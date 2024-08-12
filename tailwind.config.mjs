/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      blue: "#38BDF8",
      lemon: {
        100: "#FFE76A",
        200: "#F5F5DC",
      },
      gray: {
        100: "#A6A6A6",
        200: "#626262"
      },
      yellow: colors.amber,
      black_gray: {
        100: "#181818",
        200: "#222222",
        300: "#5F5F5F"
      },
      mustard: {
        100: "#FFAC00",
        200: "#FBBC05",
      },
      peach: {
        100: "#FFD3B1",
        900: "#FF8450",
      },
      tech: {
        astro: "#E83CBA",
        mongodb: "#00ED64",
        react: "#58C4DC",
      },
    },
    fontFamily: {
      Hachi: ["Hachi Maru Pop"],
      Gruppo: ["Gruppo"],
      inter: ["Inter"],
    },
    
  },
  plugins: [],
};
  