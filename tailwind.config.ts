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
    },
  },
  plugins: [],
};
export default config;
