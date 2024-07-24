import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  internalContent: {
    description: "home internal content basic styles",
    value: {
      maxW: "internalContentMaxWidth",
      mx: "auto",
      px: "internalContentXPadding",
    },
  },
})
