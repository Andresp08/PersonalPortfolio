import { ThemeProvider } from "@emotion/react";
import "@emotion/react";

export const theme = {
  color: {
    darkNavy: "#020c1b",
    /*
     * #020c1b
     */
    navy: "#0a192f",
    lightNavy: "#112240",
    lightestNavy: "#233554",
    navyShadow: "rgba(2,12,27,0.7)",
    slate: "#8892b0",
    darkSlate: "#495670",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    white: "#e6f1ff",
    green: "#64ffda",
    greenTint: "rgba(100,255,218,0.1)",
    pink: "#f57dff",
    blue: "#57cbff",
  },
  fontSize: {
    xxs: "12px",
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "22px",
    heading: "32px",
  },
  space: {
    borderRadius: "4px",
    navHeight: "100px",
    navHeightScroll: "70px",
    tabHeight: "42px",
    tabWidth: "120px",
  },
} as const;

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}

export default theme;
