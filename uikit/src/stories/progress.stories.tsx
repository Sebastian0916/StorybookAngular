import type { Meta, StoryObj } from "@storybook/react";
import { CircularProgress } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof CircularProgress> = {
    title: "Components/CircularProgress",
    component: CircularProgress,
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
type Story = StoryObj<typeof CircularProgress>;

export const button: Story = {
    name: "Circular progress",
    render: (args) => (
        <>
            <CircularProgress />
        </>
    ),
};
