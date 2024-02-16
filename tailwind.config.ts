import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-area": "url('/images/background-bg.min.png')",
        "background-one": "url('/background/background-1.jpg')",
        "background-two": "url('/background/background-2.jpg')",
        "background-three": "url('/background/background-3.jpg')",
        "background-four": "url('/background/background-4.jpg')",
        "create-account-dark": "url('/img/create-account-office-dark.jpeg')",
        "create-account": "url('/img/create-account-office.jpeg')",
        "login-office-dark": "url('/img/login-office-dark.jpeg')",
        "login-office": "url('/img/login-office.jpeg')",
        "forgot-password-office": "url('/img/forgot-password-office.jpeg')",
        "forgot-password-office-dark": "url('/img/forgot-password-office-dark.jpeg')",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("flowbite/plugin"),
  ],
};
export default config;
