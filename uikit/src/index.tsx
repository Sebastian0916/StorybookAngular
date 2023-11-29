import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "@sinco/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Registro from "./components/registro/Registro";
import RegistroTerceros from "./components/registro/RegistroTerceros";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registro />,
  },
  {
    path: "RegistroTerceros:RegistroTercerosID",
    element: <RegistroTerceros />,
  },
]);
// import { SincoTheme } from "@sinco/react";
declare module "@mui/material/Radio" {
  interface RadioPropsSizeOverrides {
    large: true;
  }
}
declare module "@mui/material/Checkbox" {
  interface CheckboxPropsSizeOverrides {
    large: true;
  }
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={SincoTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
