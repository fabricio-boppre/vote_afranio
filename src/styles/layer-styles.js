import { defineLayerStyles } from "@pandacss/dev"

export const layerStyles = defineLayerStyles({
  internalContent: {
    description: "Home internal content basic styles.",
    value: {
      maxW: "internalContentMaxWidth",
      mx: "auto",
      px: "internalContentXPadding",
    },
  },
  socialHeaderLinks: {
    description: "Header social links styles.",
    value: {
      alignItems: "center",
      mx: [undefined, "20px", "10px"],
      h: "30px",
      fontFamily: "GeneralSansSemibold, sans-serif",
      fontSize: "18px",
      textShadow: "0px 3px 6px #00000029",
      "& img": { mr: "10px", h: [undefined, "30px", "24px"] },
      "& span": { display: ["none", undefined, "inline"] },
      hideBelow: "sm !important",
    },
  },
  galleryImage: {
    description: "Gallery images styles.",
    value: {
      width: ["50%", undefined, undefined, "25%"],
      height: "auto",
    },
  },
  basicBox: {
    description: "Basic text box styles.",
    value: {
      mb: ["40px", "60px"],
      "& h2": {
        textStyle: "titleSecondLevel",
        textAlign: ["center", "left"],
        w: "fit-content",
        zIndex: "2",
        pos: "relative",
        m: ["0 auto", "0 30px"],
        p: "7px 10px 2px 10px",
      },
      "& p": {
        zIndex: "1",
        p: ["35px 20px 20px 20px", "35px 30px 20px 30px"],
        textStyle: "body",
        mt: ["-15px", "-20px"],
        rounded: "boxRadius",
      },
    },
  },
  socialHelpLinks: {
    description: "Help section social links styles.",
    value: {
      fontFamily: "GeneralSansMedium, sans-serif",
      fontSize: ["20px", undefined, undefined, "24px"],
      lineHeight: ["28px", undefined, undefined, "30px"],
      alignItems: "center",
      mx: ["auto", "0"],
      h: ["28px", undefined, undefined, "30px"],
      textShadow: "0px 3px 6px #00000029",
      "& img": { mr: "10px", h: "24px", w: "auto" },
      color: "white",
    },
  },
  socialFooterLinks: {
    description: "Header social links styles.",
    value: {
      alignItems: "center",
      mx: ["auto", "0"],
      h: "24px",
      textShadow: "0px 3px 6px #00000029",
      "& img": { mr: "10px", h: "24px", w: "auto" },
      color: "white",
    },
  },
})
