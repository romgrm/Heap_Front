import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    primary: {
      white: "#FFFFFF", 
      rose: "#fab1a0",
      blue: "#0000FF",
      orange: "#ff8000",
      charbon: "#1F1F1F",
      gris: "#9BA4B0",
    },
  },
  breakpoints: {
    base: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1920,
  },
});
