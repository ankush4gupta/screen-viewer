import type { Config } from "tailwindcss";
// import colors from 'tailwindcss/colors'
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        teal: {
          100: '#E3FEF7',
          200: '#77B0AA',
          300: '#135D66',
          400: '#003C43',
          500: '#0E8388'
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
