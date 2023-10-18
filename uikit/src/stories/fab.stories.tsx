import type { Meta, StoryObj } from "@storybook/react";
import { Box, Fab } from "@mui/material";
import { Add } from "@mui/icons-material";

import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Fab> = {
  title: "Components/fab",
  component: Fab,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Fab>;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const fab: Story = {
  name: "fab-extend",
  render: (args) => (
    <>
      <Box>
        <Fab variant="extended" color="primary" aria-label="add">
          Fab
          <Add />
        </Fab>
        <Fab variant="extended" color="primary" size="medium" aria-label="add">
          Fab
          <Add />
        </Fab>
        <Fab variant="extended" color="primary" size="large" aria-label="add">
          Fab
          <Add />
        </Fab>
      </Box>
    </>
  ),
};
export const button: Story = {
  name: "fab",
  render: (args) => (
    <>
      <Box>
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
        <Fab color="primary" size="medium" aria-label="add">
          <Add />
        </Fab>
        <Fab color="primary" size="large" aria-label="add">
          <Add />
        </Fab>
      </Box>
    </>
  ),
};
