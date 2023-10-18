import type { Meta, StoryObj } from "@storybook/react";
import { Button, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Delete } from "@mui/icons-material";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
type Story = StoryObj<typeof Button>;

export const button: Story = {
  name: "button",
  render: (args) => (
    <>
      <Button size="small" variant="contained">
        Button
      </Button>
      <Button size="medium" variant="contained">
        Button
      </Button>
      <Button size="large" variant="contained">
        Button
      </Button>
    </>
  ),
};
export const buttonWhitIcon: Story = {
  name: "button-icons",
  render: (args) => (
    <>
      <Button size="small" variant="contained" startIcon={<Delete />}>
        Button
      </Button>
      <Button size="medium" variant="contained" startIcon={<Delete />}>
        Button
      </Button>
      <Button size="large" variant="contained" startIcon={<Delete />}>
        Button
      </Button>
    </>
  ),
};
export const Icon_Button: Story = {
  name: "icon-button",
  render: (args) => (
    <>
      <IconButton size="small">
        <Delete />
      </IconButton>
      <IconButton size="medium">
        <Delete />
      </IconButton>
      <IconButton size="large">
        <Delete />
      </IconButton>
    </>
  ),
};
