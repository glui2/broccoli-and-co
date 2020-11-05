import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#33A721",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        background: "linear-gradient(45deg, #caf761 30%, #9ddb38 90%);",
      },
    },
  },
  typography: {
    fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
    h3: {
      textShadow: "2px 2px rgba(0,0,0,0.3)",
      fontSize: "1.3rem",
      "@media (min-width:600px)": {
        fontSize: "3rem",
      },
    },
    h6: {
      fontSize: "0.8rem",
      "@media (min-width:600px)": {
        fontSize: "1.2rem",
      },
    },
    body1: {
      fontWeight: "300",
      fontSize: "0.7rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontWeight: "200",
      fontSize: "0.6rem",
      "@media (min-width:600px)": {
        fontSize: "1rem",
      },
    },
  },
});

export default theme;
