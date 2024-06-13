import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/material";
import { ProgressSinco, SincoTheme } from "@sinco/react";
import type { Meta, StoryObj } from "@storybook/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof ProgressSinco> = {
  title: "sinco react/Progress",
  component: ProgressSinco,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Stack height={160}>
          <Story />
        </Stack>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProgressSinco>;

export const ProgressSincoStory: Story = {
  name: "ProgressSinco",
  render: () => <ProgressSinco time={1000}  />,
};
