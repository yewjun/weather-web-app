const defaultTheme = require("tailwindcss/defaultTheme");

const brandColor = {
  100: "#b3e7ff",
  200: "#66d0ff",
  500: "#00b0ff",
  700: "#009ee6",
  800: "#008dcc",
};

const spacing = {
  0.25: "0.0625rem",
  0.75: "0.1875rem",
  1.25: "0.3125rem",
  1.75: "0.4375rem",
  2.25: "0.5625rem",
  2.75: "0.6875rem",
  3.25: "0.8125rem",
  3.75: "0.9375rem",
};

module.exports = {
  theme: {
    minWidth: defaultTheme.width,
    fontFamily: {
      ...defaultTheme.fontFamily,
      sans: ["Sailec", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
    },
    flex: {
      ...defaultTheme.flex,
      2: "2 2 0%",
      3: "3 3 0%",
    },
    letterSpacing: {
      ...defaultTheme.letterSpacing,
      1: "1px",
    },
    maxHeight: (theme) => ({
      "screen-20": "20vh",
      "screen-40": "40vh",
      "screen-60": "60vh",
      "screen-80": "80vh",
      screen: "100vh",
      inherit: "inherit",
      ...theme("spacing"),
    }),
    customForms: (theme) => ({
      default: {
        checkbox: {
          borderColor: "#98a6ba",
        },
        input: {
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.5"),
          paddingTop: spacing["2.25"],
          paddingBottom: spacing["2.25"],
          "&:focus": {
            boxShadow: undefined,
          },
        },
        textarea: {
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.5"),
          paddingTop: spacing["2.25"],
          paddingBottom: spacing["2.25"],
        },
        select: {
          fontSize: theme("fontSize.sm"),
          lineHeight: theme("lineHeight.5"),
          paddingTop: spacing["2.25"],
          paddingBottom: spacing["2.25"],
        },
        radio: {
          borderColor: "#98a6ba",
          borderWidth: 2,
          icon:
            '<svg viewBox="0 0 32 32" fill="none" stroke="white" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" stroke-width="3" /></svg>',
        },
      },
    }),
    extend: {
      zIndex: {
        "-10": "-10",
      },
      textColor: {
        placeholder: "#A0AFBF",
      },
      height: {
        "screen-20": "20vh",
        "screen-40": "40vh",
        "screen-60": "60vh",
        "screen-80": "80vh",
      },
      minHeight: (theme) => ({
        ...theme("spacing"),
      }),
      padding: spacing,
      margin: spacing,
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        darkgrey: "#2D333A",
        mediumgrey: "#525B65",
        lightgrey: "#788494",
        lightergrey: "#fafafa",
        offwhite: "#ECEEF1",
        controlborder: "#98a6ba",
        brand: brandColor,
        turquoise: {
          100: "#bcf6e6",
          200: "#79eccd",
          500: "#1fdeab",
          700: "#1cc99b",
          800: "#19b38a",
        },
        lemon: {
          100: "#ffeeb3",
          200: "#ffdd66",
          500: "#ffc600",
          700: "#e5b200",
          800: "#cc9e00",
        },
        purple: {
          100: "#CEB9F8",
          200: "#9E74F1",
          500: "#6E2FEB",
          700: "#5916DF",
          800: "#4E13C3",
        },
        blue: {
          100: "#B4BDFD",
          200: "#6577FB",
          500: "#2F48FA",
          700: "#051ED1",
          800: "#051ED1",
        },
        carbon: {
          100: "#B8C5D2",
          200: "#416586",
          500: "#123F68",
          700: "#0E3253",
          800: "#0B263E",
        },
        info: {
          100: "#E6F1FF",
          200: "#A9D0FF",
          500: "#459AFE",
          700: "#0171F4",
          800: "#0152B2",
        },
        success: {
          100: "#D5F6E3",
          200: "#ACECC7",
          500: "#2ECC71",
          700: "#249E58",
          800: "#1A7441",
        },
        warning: {
          100: "#FFECCC",
          200: "#FFDCA3",
          500: "#FFB53B",
          700: "#CC7F00",
          800: "#804F00",
        },
        error: {
          100: "#FEE8E7",
          200: "#FAA59E",
          500: "#F44336",
          700: "#D5190C",
          800: "#C1170B",
        },
      },
      boxShadow: {
        "outline-brand": `0 0 0 2px ${brandColor[200]}`,
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "even", "hover", "focus", "active"],
    boxShadow: [
      "responsive",
      "hover",
      "focus",
      "active",
      "focus-within",
      "focus-visible",
    ],
    borderColor: ["responsive", "hover", "focus", "focus-within"],
    padding: ["responsive", "first", "last"],
    margin: ({ after }) => after(["first"]),
    inset: ({ after }) => after(["active"]),
  },
  // plugins: [require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  important: true,
  darkMode: "class",
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
};
