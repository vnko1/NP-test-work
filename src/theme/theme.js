import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00BFA5",
      light: "#5DF2D6",
      dark: "#008E76",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#3F51B5",
      light: "#7986CB",
      dark: "#303F9F",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#666666",
      disabled: "#A0A0A0",
    },
    error: {
      main: "#FF3D00",
    },
    success: {
      main: "#4CAF50",
    },
    warning: {
      main: "#FFC107",
    },
    info: {
      main: "#2196F3",
    },
  },
});
export { theme };
