import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SincoTheme } from "@sinco/react";
import { ThemeProvider } from "@mui/material/styles";
// import { SincoTheme } from "./Theme";
declare module "@mui/material/styles" {
  interface PaletteColor {
    50: string;
    100: string;
    200: string;
    300: string;
    600: string;
    700: string;
    800: string;
  }
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
