import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const button: Story = {
  name: "checkbox",
  render: (args) => (
    <>
      <Checkbox {...label} size="small" />
      <Checkbox {...label} size="medium" />
      <Checkbox {...label} size="large" />
    </>
  ),
};
