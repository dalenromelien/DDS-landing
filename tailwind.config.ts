import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",

  plugins: [
    require('daisyui'),
    require('@nextui-org/react'),
  ],
  daisyui: {
    themes: [
      {
        ddsColorPalette: {
          "primary": "#5AC9D1",
          "secondary": "#2C9CA3",
          "accent": "#81F0F8",
          "neutral": "#828282",
          "base-100": "#ffffff",
        }
      }
    ]
  },
};
export default config;
