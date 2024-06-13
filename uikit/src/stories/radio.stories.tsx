import type { Meta, StoryObj } from "@storybook/react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
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
  argTypes: {
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "warning", "info", "success"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const RadioStorie: Story = {
  name: "radio",
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => <Radio {...args} />,
};
export const RadioStorieFormControl: Story = {
  name: "Radio-formControl",
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => (
    <FormControl>
      <FormLabel>Exmaple</FormLabel>
      <RadioGroup row>
        <FormControlLabel control={<Radio {...args} />} label="Female" />
        <FormControlLabel control={<Radio {...args} />} label="Male" />
        <FormControlLabel control={<Radio {...args} />} label="Other" />
      </RadioGroup>
    </FormControl>
  ),
};
