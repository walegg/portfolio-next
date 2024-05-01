/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-800": "#15151e",
        white: "#fff",
        "neutral-700": "#2b2b3b",
        "neutral-white": "#fcfcfc",
        "neutral-500": "#8f8fa5",
        "primary-600": "#722ed1",
        "neutral-400": "#c3c3d0",
        darkgray: "#9e9e9e",
      },
      spacing: {},
      fontFamily: {
        "body-p2-medium": "Satoshi",
        "heading-h3": "Poppins",
        "body-p1-medium": "Inter",
      },
      borderRadius: {
        "21xl": "40px",
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      lgi: "19px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "21xl": "40px",
      "13xl": "32px",
      base: "16px",
      lg: "18px",
      "45xl": "64px",
      "32xl": "51px",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
