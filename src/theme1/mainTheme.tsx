import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading: React.CSSProperties;
    heading3: React.CSSProperties;
    subtitle5: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading?: React.CSSProperties;
    heading3?: React.CSSProperties;
    subtitle5?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading: true;
    heading3: true;
    subtitle5: true;
  }
}

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#0365F2",
      light: "#E2F2E9",
      dark: "#22C870",
    },
    secondary: {
      main: "#116BE9",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    heading: {
      position: "relative",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "36px",
      lineHeight: "45px",
      color: "#03314B",
    },
    heading3: {
      fontSize: "24px",
      lineHeight: "30.17px",
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 700,
      fontFamily: "Cera Pro",
      position: "relative",
      width: "225px",
      height: "23px",
      left: "1px",
      fontSize: "18px",
      lineHeight: "23px",
      color: "#03314b",
      order: 0,
      flexGrow: 0,
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "18px",
      lineHeight: "22.63px",
    },
    body1: {
      position: "relative",
      left: "1%",
      right: "60.92%",
      top: "74.89%",
      bottom: "20.82%",

      /* Body 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",

      /* Text/low_emphasis */

      color: "#6d787e",
    },
    body2: {
      width: "100px",
      height: "20px",

      /* Body 1 */

      fontFamily: "Cera Pro",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "20px",

      /* Blue */

      // color: "#0365F2",

      /* Inside auto layout */

      flex: "none",
      textTransform: "capitalize",
      order: 1,
      flexGrow: 0,
    },
    caption: {
      position: "relative",
      left: "26px",
      fontFamily: "PT Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "22px",
      top: "1.5px",
      color: "#3A4649",
      flex: "none",
      order: 1,
      flexGrow: "0",
    },
    subtitle5: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "25.14px",
    },
  },
});
export default customTheme;
