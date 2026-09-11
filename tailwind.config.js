/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nest: {
          bg: "#21433D",
          deep: "#112C2C",
          mint: "#F4FFFB",
          tiffany: "#9ECABC",
          sage: "#638B7E",
          feld: "#566F6B",
          sun: "#FFCC49",
          moss: "rgba(56, 98, 80, 0.7)",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      backgroundImage: {
        "btn-fill": "linear-gradient(180deg, #9ECABC 0%, #638B7E 100%)",
      },
      boxShadow: {
        card: "0 20px 40px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
