import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
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
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStories: Story = {
  name: "checkbox",
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => <Checkbox {...args} />,
};

export const CheckboxStoriesFormControl: Story = {
  name: "checkbox-formControl",
  args: {
    size: "medium",
    color: "primary",
  },
  render: (args) => (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...args} />} label="Label" />
      <FormControlLabel
        required
        control={<Checkbox {...args} />}
        label="Required"
      />
      <FormControlLabel
        disabled
        control={<Checkbox {...args} />}
        label="Disabled"
      />
    </FormGroup>
  ),
};
