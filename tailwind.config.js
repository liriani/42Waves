import tailwindAnimate from "tailwindcss-animate";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {}
  },
  plugins: [tailwindAnimate, tailwindScrollbar]
};


