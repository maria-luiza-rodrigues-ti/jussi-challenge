import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-jussi": "#03FFA5",
        "pink-jussi": "#EE0E7D",
        "grey-jussi": "#F2F2F2",
        "dark-grey": "#5B5B5B",
      },
      fontSize: {
        "jussi-h2": ["32px", { lineHeight: "40px", fontWeight: "700" }],
        "jussi-p": ["16px", { lineHeight: "24px", fontWeight: "500" }],
        "jussi-search": ["14px", { lineHeight: "21px", fontWeight: "500" }],
        "jussi-email": ["32px", { lineHeight: "24px", fontWeight: "500" }],
        "jussi-small": ["12px", { lineHeight: "18px", fontWeight: "500" }],
      },
      MaxWidth: {
        "jussi-content": "676px",
      },
    },
  },
  plugins: [],
};
export default config;
