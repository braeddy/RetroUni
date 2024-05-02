/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html",
            "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        Kode: ["Kode Mono", "sans-serif"],
        VT323: ["VT323", "sans-serif"],
        Rubik: ["Rubik Mono One", "sans-serif"]
      }
    },
  },
  plugins: [require('daisyui'),
            require('preline/plugin'),
            require("rippleui"),
            require('@tailwindcss/forms'),],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
            
}

