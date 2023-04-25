/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/fragments/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#014960",
      },
      spacing: {
        128: "32rem",
      },
      height: {
        "no-header": "calc(100vh - 29rem)",
        "no-header-small": "calc(100vh - 20rem)",
        "no-header-mobile": "calc(100vh - 16rem)",
      },
    },
  },
  plugins: [],
};
