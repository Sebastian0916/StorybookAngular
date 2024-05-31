import type { Meta, StoryObj } from "@storybook/react";
import { Button, IconButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Delete, Person } from "@mui/icons-material";

import { SincoTheme } from "../Theme";
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
  argTypes: {
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
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    children: {
      control: "text",
    },
    endIcon: {
      control: "boolean",
    },
    startIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonStorie: Story = {
  name: "button",
  args: {
    size: "small",
    color: "primary",
    variant: "contained",
    children: "Button",
    startIcon: false,
    endIcon: false,
  },
  render: ({ size, variant, startIcon, endIcon, children }) => (
    <Button
      variant={variant}
      size={size}
      startIcon={startIcon === true ? <Person /> : ""}
      endIcon={endIcon === true ? <Person /> : ""}
    >
      {children}
    </Button>
  ),
};
export const ButtonWhitIcon: Story = {
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
        <Delete fontSize="small" />
      </IconButton>
      {/* <IconButton size="small">
        <Delete fontSize="medium" />
      </IconButton> */}
      {/* <IconButton size="small">
        <Delete fontSize="large" />
      </IconButton> */}
      {/* <IconButton size="medium">
        <Delete fontSize="small" />
      </IconButton> */}
      <IconButton size="medium">
        <Delete fontSize="medium" />
      </IconButton>
      <IconButton size="large">
        <Delete fontSize="medium" />
      </IconButton>
    </>
  ),
};
