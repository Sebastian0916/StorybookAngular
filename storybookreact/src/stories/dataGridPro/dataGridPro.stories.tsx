import type { Meta } from "@storybook/react";
import { ThemeProvider } from "@mui/material";

import DataGridProExample from "./dataGridPro";
import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import DataGridProDemo from "./dataGridTwo";

const meta: Meta<typeof DataGridProDemo> = {
  title: "Components/DataGrid",
  component: DataGridProDemo,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;

export const DataGrid = {
  name: "EN PROGRESO...",
};
