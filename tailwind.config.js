/** @type {import('tailwindcss').Config} */

const gray = {
  50: "hsl(0deg, 0%, 95%)",
 100: "hsl(0deg, 0%, 85%)",
 200: "hsl(0deg, 0%, 75%)",
 300: "hsl(0deg, 0%, 65%)",
 400: "hsl(0deg, 0%, 55%)",
 500: "hsl(0deg, 0%, 45%)",
 600: "hsl(0deg, 0%, 35%)",
 700: "hsl(0deg, 0%, 25%)",
 800: "hsl(0deg, 0%, 15%)",
 900: "hsl(0deg, 0%, 5%)"
};

const discord = {
 600: "#36393F",
 700: "#32353B",
 800: "#2F3136",
 900: "#202225"
};


module.exports = {
 content: ['./src/**/*.{js,ts,jsx,tsx}'],
 theme: {
   extend: {
     colors: { gray, discord },
   },
 },
 plugins: [],
};
