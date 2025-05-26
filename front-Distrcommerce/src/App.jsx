import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";

const theme = createTheme({
  palette: {
    primary: {
      main: '#131921',
    },
    secondary: {
      main: '#232f3e',
    },
    background: {
      default: '#eaeded',
    },
  },
});

function App() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login" || location.pathname === "/register";

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!hideHeader && <Header />}
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
