import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    animation: {
      'spin-slow': 'spin 8s linear infinite',
    },
    backgroundImage:{
      circularLight : 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)'
    }
  },
  plugins: [require("daisyui")],
};
export default config;
