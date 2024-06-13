import type { Meta, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { SincoTheme } from "@sinco/react";
import { Alert, AlertTitle } from "@mui/material";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
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
  argTypes: {
    variant: {
      options: ["outlined", "filled", "standard"],
      control: { type: "radio" },
    },
    children: {
      control: "text",
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "error",
        "warning",
        "info",
        "success",
        "inherit",
      ],
    },
    severity: {
      control: "select",
      options: ["error", "info", "success", "warning"],
    },
    title: {
      control: "text",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertStory: Story = {
  name: "Alert",
  args: {
    children: "Alert",
    variant: "filled",
    severity: "info",
    color: "info",
  },
  render: ({ children, variant, title, severity, color }) => (
    <Alert variant={variant} color={color} severity={severity}>
      <AlertTitle>{title}</AlertTitle>
      {children}
    </Alert>
  ),
};
