import type { Meta, StoryObj } from "@storybook/react";
import { Tab, Tabs } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof Tab> = {
  title: "Components/Tabs",
  component: Tab,
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
type Story = StoryObj<typeof Tab>;

export const primary: Story = {
  name: "Tab",
  render: (args) => (
    <>
      <Tabs value={1} centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </>
  ),
};
export const Secondary: Story = {
  name: "Tab-vertical",
  render: (args) => (
    <>
      <Tabs value={1} orientation="vertical" centered>
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    </>
  ),
};
