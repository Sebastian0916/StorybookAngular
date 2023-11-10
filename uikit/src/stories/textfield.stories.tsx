import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { SincoTheme } from "../Theme";

const meta: Meta<typeof TextField> = {
  title: "Components/TextField",
  component: TextField,
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
type Story = StoryObj<typeof TextField>;

export const primary: Story = {
  name: "textField-outlined",
  render: (args) => (
    <>
      <TextField label="Outlined" variant="outlined" />
      <TextField label="outlined" variant="outlined" size="medium" />
    </>
  ),
};
export const secondary: Story = {
  name: "textField-filled",
  render: (args) => (
    <>
      <TextField label="Outlined" variant="filled" />
      <TextField label="outlined" variant="filled" size="medium" />
    </>
  ),
};

export const tercero: Story = {
  name: "textField-standard",
  render: (args) => (
    <>
      <TextField label="Outlined" variant="standard" />
      <TextField label="outlined" variant="standard" size="medium" />
    </>
  ),
};
