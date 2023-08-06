import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#37474f",
    },
    secondary: {
      main: "#f57f17",
    },
    background: {
      paper: "#cfd8dc",
    },
    text: {
      secondary: "rgba(146,141,141,0.6)",
      primary: "rgba(32,31,31,0.87)",
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeightLight: 500,
    h1: {
      fontSize: 18,
      fontWeight: 800,
    },
    h2: {
      fontSize: 17,
      fontWeight: 700,
      textTransform: "uppercase",
    },
  },
  spacing: 8,
});
