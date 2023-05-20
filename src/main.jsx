import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#336b87",
    },
    secondary: {
      main: "#fffefe",
    },
    background: {
      default: "#353535",
      paper: "#0a0a0a",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "Montserrat",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
