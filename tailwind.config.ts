import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Darker Grotesque", "sans-serif"],
        sans: ["Innovator Grotesk", "sans-serif"],
      },
      colors: {
        ocean: "#091420",
      },
    },
  },
  plugins: [],
} satisfies Config;
