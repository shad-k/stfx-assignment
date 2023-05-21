/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      ...colors,
      gray: {
        ...colors.gray,
        550: "#585A5F",
      },
    },
    extend: {
      colors: {
        "primary-green": "#00CC6A",
        "accent-yellow": "#FFC700",
        field: "#1B1F28",
        section: "#10131B",
        "base-100": "#0B0C13",
      },
      fontFamily: {
        sans: ["Lexend", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugin: [require("flowbite/plugin")],
};
