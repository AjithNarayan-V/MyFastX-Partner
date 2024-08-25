/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        lightgreen: "#f2faf5",
        basedark: "#080404",
        darkslategray: "#3b3838",
        dimgray: {
          "100": "#5d5d5d",
          "200": "#535353",
          "300": "#4e4e4e",
        },
        black: "#000",
        accentcolor: "#63b178",
        gray: {
          "100": "#fcfcfc",
          "200": "#787878",
          "300": "#171717",
          "400": "#898989",
          "600": "#2c2c2c",
          "800": "rgba(44, 44, 44, 0.9)",
        },
        gainsboro: {
          "100": "#d9d9d9",
          "200": "rgba(221, 221, 221, 0.41)",
          "300": "#ddd",
        },
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f6f6f6",
          "300": "#f5f5f4",
        },
        darkgray: "#b4b4b4",
        mintcream: "#eef4ec",
        seagreen: {
          "100": "#4a965e",
          "200": "#206139",
        },
        silver: "#b5b5b5",
      },
      spacing: {},
      fontFamily: {
        rubik: "Rubik",
        poppins: "Poppins",
      },
      borderRadius: {
        "6xs": "7px",
        mini: "15px",
        "40xl": "59px",
        "2xs": "11px",
        "4xl": "23px",
        "13xl": "32px",
        "4xs": "9px",
        "36xl": "55px",
        smi: "13px",
        lg: "18px",
        "3xl": "22px",
      },
    },
    fontSize: {
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      base: "16px",
      smi: "13px",
      "3xs": "10px",
      xl: "20px",
      sm: "14px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
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
