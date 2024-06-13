import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { Add } from "@mui/icons-material";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
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
    size: {
      options: ["small", "medium"],
      control: "radio",
    },
    variant: {
      options: ["outlined", "filled"],
      control: "radio",
    },
    color: {
      options: ["primary", "secondary", "error", "success", "info", "warning"],
      control: "radio",
    },
    icon: {
      control: "boolean",
    },
    label: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const ChipStory: Story = {
  name: "chip",
  args: {
    color: "primary",
    size: "small",
    icon: <Add fontSize="small" />,
    label: "chip",
    variant:"filled"
  },
  render: ({ label, icon, size, color,variant }) => (
    <Chip size={size} label={label} color={color} icon={icon} variant={variant}/>
  ),
};
