import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
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
type Story = StoryObj<typeof ButtonGroup>;

export const button: Story = {
  name: "button",
  args: {
    size: "small",
    variant: "contained",
    children: "Button",
    color: "primary",
  },
  render: ({ color, size, variant, children, ...args }) => (
    <>
      <ButtonGroup size={size} color={color} variant={variant} {...args}>
        <Button>{children}</Button>
        <Button>{children}</Button>
        <Button>{children}</Button>
      </ButtonGroup>
    </>
  ),
};
