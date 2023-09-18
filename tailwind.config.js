/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        twoDotFivePercent: "2.5%",
        fivePercent: "5%",
        tenPercent: "10%",
        fifteenPercent: "15%",
        twentyPercent: "20%",
        twentyFivePercent: "25%",
        thirtyPercent: "30%",
        thirtyFivePercent: "35%",
        fortyPercent: "40%",
        fortyFivePercent: "45%",
        fiftyPercent: "50%",
      },
      width: {
        18: "70px",
        50: "200px",
        75: "300px",
        100: "400px",
        110: "440px",
      },
      height: {
        50: "200px",
        100: "400px",
        110: "440px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
  },
  plugins: [],
};
