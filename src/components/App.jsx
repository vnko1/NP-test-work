import Router from "./Router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "/src/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Router />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
