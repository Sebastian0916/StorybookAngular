import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
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
type Story = StoryObj<typeof Switch>;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const button: Story = {
  name: "switch",
  render: (args) => (
    <>
      <Switch {...label} defaultChecked size="small" />
      <Switch {...label} defaultChecked size="medium" />
    </>
  ),
};
