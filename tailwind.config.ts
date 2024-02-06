import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "banner-area": "url('/images/background-bg.min.png')",
        "background-one": "url('/background/background-1.jpg')",
        "background-two": "url('/background/background-2.jpg')",
        "background-three": "url('/background/background-3.jpg')",
        "background-four": "url('/background/background-4.jpg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("flowbite/plugin"),
  ],
};
export default config;
