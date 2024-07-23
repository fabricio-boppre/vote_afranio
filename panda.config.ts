import { defineConfig } from "@pandacss/dev"

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./src/**/*.{ts,tsx,js,jsx,astro}",
    "./pages/**/*.{ts,tsx,js,jsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  globalVars: {
    "--header-height": "100px",
    "--big-image-bottom-white-space": "50px",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          greenHeader: { value: "#00D087" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
