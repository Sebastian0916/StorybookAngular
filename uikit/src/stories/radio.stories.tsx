import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Radio> = {
  title: "Components/radio",
  component: Radio,
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
type Story = StoryObj<typeof Radio>;

export const button: Story = {
  name: "radio",
  render: (args) => (
    <>
      <Radio
        value="a"
        name="radio-buttons"
        inputProps={{ "aria-label": "A" }}
      />
      <Radio
        size="medium"
        value="b"
        name="radio-buttons"
        inputProps={{ "aria-label": "B" }}
      />
      <Radio
        size="large"
        value="c"
        name="radio-buttons"
        inputProps={{ "aria-label": "C" }}
      />
    </>
  ),
};
