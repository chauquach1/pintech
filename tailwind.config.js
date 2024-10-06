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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mercury: "#E5E8E8",
        sapphire: "#07276C",
        picton: "#15C1FF",
        azure: "#1183FD",
        atlantis: "#9CD632"
      },
    },
  },
  plugins: [],
};
