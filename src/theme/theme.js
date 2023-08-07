import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#607D8B", // Steel Grey
      light: "#90A4AE", // Light Steel Grey
      dark: "#455A64", // Dark Steel Grey
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#9E9E9E", // Grey
      light: "#E0E0E0", // Light Grey
      dark: "#616161", // Dark Grey
      contrastText: "#000000",
    },
    background: {
      default: "#F5F5F5", // Light Grey background
      paper: "#FFFFFF", // White paper color
    },
    text: {
      primary: "#333333", // Darker primary text
      secondary: "#666666", // Grey secondary text
      disabled: "#A0A0A0", // Lighter disabled text
    },
    error: {
      main: "#D32F2F", // Darker shade of red
    },
    success: {
      main: "#388E3C", // Darker shade of green
    },
    warning: {
      main: "#FFA000", // Darker shade of amber
    },
    info: {
      main: "#1976D2", // Darker shade of blue
    },
  },
});

export { theme };
