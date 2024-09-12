const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#1560D1",
        secondery: "#001441",
      },
      backgroundImage: {
        hero: "url('./src/assets/heroImg.png')",
        mission: "url('./src/assets/ourMissionBg.png')",
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
