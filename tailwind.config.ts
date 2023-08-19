import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      xl: "1280px",
      xxl: "1440px",
    },
    colors: {
      white: "#fff",
      red: "#FF5757",
      light2: "rgba(255, 255, 255, 0.2)",
    },
    fontFamily: {
      inter: ["Inter", " sans-serif"],
    },
    fontSize: {
      10: "10px",
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      28: "28px",
      30: "30px",
      32: "32px",
      33: "33px",
      37: "37px",
      40: "40px",
      43: "43px",
      67: "67px",
      98: "98px",
    },
    fontWeight: {
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
    },
    backgroundColor: {
      overlay: "rgba(1, 10, 5, 0.75)",
      light1: "rgba(255, 255, 255, 0.1)",
    },
  },
  plugins: [],
};
export default config;
