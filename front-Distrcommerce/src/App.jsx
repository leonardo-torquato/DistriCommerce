import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import AppRoutes from "./routes";
import Home from "./screens/Home";

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
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {!hideHeader && <Header onSearch={setSearchTerm} />}
        <AppRoutes searchTerm={searchTerm} />
      </div>
    </ThemeProvider>
  );
}

export default App;
