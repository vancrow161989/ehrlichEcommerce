/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "40px",
      screens: {
        "2xl": "1440px"
      }
    },
    fontFamily: {
      sans: "Montserrat, serif",
      serif: "Montserrat, serif",
      body: "Montserrat, sans-serif"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      gray: colors.slate,
      primary: {
        300: "#222222",
        500: "#000000"
      },
      danger: {
        500: "#C1272D"
      }
    },
    extend: {
      colors: {
        grayTheme: {
          500: "#f2f2f2"
        },
        grayThemeS: {
          500: "#f7f7f7"
        }
      },
      fontSize: {
        h1: ["2rem"],
        h2: ["1.5rem"],
        themeXs: ["10px", "12px"],
        theme0Sm: ["12px", "15px"],
        themeSm: ["18px", "22px"],
        theme2Sm: ["24px", "29px"],
        theme3sm: ["28px", "34px"],
        themeMd: ["32px", "39px"],
        themeLg: ["36px", "44px"],
        theme2lg: ["86px", "86px"]
      }
    }
  },
  plugins: []
};
