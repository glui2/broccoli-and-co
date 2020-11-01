import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
        main: "#FFFFFF",
        },
        secondary: {
        main: "#00DBB3",
        },
        background: {
        default: "#fff",
        },
    },
    typography: {
        fontFamily: ["Poppins", "Roboto", "sans-serif"].join(","),
        h3: {
            fontSize: "1.3rem",
            "@media (min-width:600px)": {
                fontSize: "3rem",
            }
        },
        body1: {
            fontWeight: "200",
            fontSize: "1rem",
            "@media (min-width:600px)": {
                fontSize: "1.5rem",
            }
        },
        body2: {
            fontWeight: "200",
            fontSize: "0.6rem",
            "@media (min-width:600px)": {
                fontSize: "1rem",
            }
        }
    },
});

export default theme;
