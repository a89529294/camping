import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-100": "#3B9197",
        "green-200": "#3A9EA5",
        "green-300": "#ACCCCE",
        "green-800": "#D9EEEC",
        orange: "#DE754F",
        "gray-200": "#E7E7E7",
        "gray-300": "#BABABA",
        "gray-500": "#454545",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "4.5": "1.125rem",
        "7.5": "1.875rem",
        "13": "3.25rem",
      },
      fontFamily: {
        biaukai: ["var(--font-biaukai)"],
      },
      lineHeight: {
        4.5: "1.125rem",
      },
      width: {
        "18": "4.5rem",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
export default config;
