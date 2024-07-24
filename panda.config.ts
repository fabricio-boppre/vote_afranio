import { defineConfig } from "@pandacss/dev"
import { textStyles } from "./src/styles/text-styles"
import { layerStyles } from "./src/styles/layer-styles"

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

  // Useful for theme customization
  theme: {
    extend: {
      textStyles,
      layerStyles,
      tokens: {
        colors: {
          greenHeader: { value: "#00D087" },
          orangeBox: { value: "#FF9619" },
          redBox: { value: "#FF503D" },
        },
        spacing: {
          internalContentXPadding: { value: "20px" },
        },
        sizes: {
          headerHeight: { value: "100px" }, // --sizes-header-height
          internalContentMaxWidth: { value: "1500px" },
          bigImageBottomWhiteSpace: { value: "50px" }, // --sizes-big-image-bottom-white-space
        },
        radii: {
          boxRadius: { value: "20px" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
})
