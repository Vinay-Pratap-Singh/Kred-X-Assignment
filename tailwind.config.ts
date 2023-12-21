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
        mainSectionBg: 'url("/assets/mainBg.png")',
        featureSectionBg: 'url("/assets/featureBg.png)',
      },
      colors: {
        primaryColor: "#32BDBF",
      },
      linearGradientColors: {
        "custom-gradient":
          "linear-gradient(93.67deg, #239A99 3.42%, #4EB7E9 93.32%)",
      },
    },
  },
  plugins: [],
};
export default config;
