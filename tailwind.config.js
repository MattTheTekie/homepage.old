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

const luminescent = {
 700: "#F0CCFB",
 800: "#E6AAF7",
 900: "#CB6CE6",
};

module.exports = {
 content: ['./src/**/*.{js,ts,jsx,tsx}'],
 theme: {
   extend: {
     colors: { gray, luminescent },
   },
 },
 plugins: [],
};
