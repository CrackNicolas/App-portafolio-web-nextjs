import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        lg: "1025px", //El original es 1024 pero al usar max-width en algunas secciones se produce un error de 1px y esta es la solucion
        ml: "450px",
        mg: "800px",
      },
      colors: {
        primary: "#000000",
        secondary: "#2020ab",
        tertiary: "#ffffff",
      },
      boxShadow: {
        "1xl": "0 0 2px 0.1px",
        "3xl": "0 0 10px 0.5px",
      },
      keyframes: {
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        translateY: {
          "0%": { translate: "0px 20px" },
          "100%": { translate: "0px 0px" },
        },
        translateX: {
          "0%": { translate: "0px 0px" },
          "100%": { translate: "-220px 0px" },
        },
        presentationLeft: {
          "0%": {
            translate: "-150px 0px",
            opacity: "0",
          },
          "100%": {
            translate: "0px 0px",
            opacity: "1",
          },
        },
        presentationRight: {
          "0%": {
            translate: "150px 0px",
            opacity: "0",
          },
          "100%": {
            translate: "0px 0px",
            opacity: "1",
          },
        },
        presentationBottom: {
          "0%": {
            translate: "0px 150px",
            opacity: "0",
          },
          "100%": {
            translate: "0px 0px",
            opacity: "1",
          },
        },
      },
      animation: {
        opacity: "opacity 1s ease-in-out",
        translateY: "translateY 1s ease-in-out",
        message: "translateX 2.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
