/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "accent-yellow": "FFC700",
        field: "#1B1F28",
        section: "#10131B",
        "base-100": "#1e1e1e",
      },
    },
  },
  plugins: [],
};
