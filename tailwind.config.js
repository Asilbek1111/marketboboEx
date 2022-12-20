module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tel: "320px",

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        topnav: "url('/topnav.svg')",
        headerbase: "url('/headerbase.svg')",
        slider1: "url('/slider1.jpg')",
        slider2: "url('/slider2.jpg')",
      },
      colors: {
        primary: "#f7d250",
        own_gray: "#F5F6FA",
        gray_light: "#B2C2DF",
        dark_gray: "#667281",
        light_blue: "#70AEFD",
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      arial: ["arial", "arial"],
    },
  },
  plugins: [],
};
