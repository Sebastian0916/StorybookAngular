import { ThemeOptions } from "@mui/material/styles";
import { components } from "./components";
import { palette } from "./palette";
import { mixins } from "./mixins";
import { breakpoints } from "./breakpoints";
import { typography } from "./typography";
import { shadows } from "./shadows";

export const themeOptions: ThemeOptions = {
  components,
  typography,
  palette,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
};

export const themeAdproOptions: ThemeOptions = {
  components,
  typography,
  spacing: 8,
  mixins,
  breakpoints,
  shadows,
  palette: {
    primary: {
      50: "#F8FAFB",
      100: "#E6EFF0",
      200: "#D2E3E4",
      300: "#82C6CB",
      400: "#2B9DA7",
      500: "#058C97",
      600: "#04848F",
      700: "#047984",
      800: "#036F7A",
      900: "#015C69",
      A100: "#98F0FF",
      A200: "#65E9FF",
      A400: "#32E1FF",
      A700: "#32E1FF",
    },
    ...palette,
  },
};
