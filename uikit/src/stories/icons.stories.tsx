import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import { SvgIcon } from "@mui/material";
import { Delete } from "@mui/icons-material";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof SvgIcon> = {
  title: "Components/SvgIcon",
  component: SvgIcon,
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
type Story = StoryObj<typeof SvgIcon>;

export const button: Story = {
  name: "svgIcon",
  render: (args) => (
    <>
      <Delete fontSize="small" />
      <Delete fontSize="medium" />
      <Delete fontSize="large" />
    </>
  ),
};
