import { Josefin_Sans, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";
import flowbite from "flowbite-react/tailwind";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          Poppins: ["var(--font-Poppins)"],
          Josefin_Sans: ["var(--font-Josefin_Sans)"],
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1400px": "1400px",
        "1500px": "1500px",
        "1600px": "1600px",
        "800px": "800px",
        "400px": "400px",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
