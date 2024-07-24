import { defineTextStyles } from "@pandacss/dev"

export const textStyles = defineTextStyles({
  titleFirstLevel: {
    description: "Titles h1 text style.",
    value: {
      fontFamily: "venice-blvd",
      fontWeight: "bold",
      fontSize: ["35px", undefined, "45px", "65px"],
      lineHeight: ["35px", undefined, "45px", "65px"],
      textTransform: "uppercase",
    },
  },
  titleSecondLevel: {
    description: "Titles h2 text style.",
    value: {
      fontFamily: "venice-blvd",
      fontWeight: "bold",
      fontSize: ["25px", undefined, "30px", "40px"],
      lineHeight: ["25px", undefined, "30px", "40px"],
    },
  },
  body: {
    description: "Principal text style.",
    value: {
      fontFamily: "GeneralSansMedium, sans-serif",
      fontSize: ["20px", undefined, undefined, "26px"],
      lineHeight: ["26px", undefined, undefined, "32px"],
    },
  },
})
