import type { Meta, StoryFn, StoryObj } from "@storybook/react";

import { ThemeProvider } from "@mui/material/styles";

import { SincoTheme } from "@sinco/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { InternationalPhone } from "../components/international-phone";

const meta: Meta<typeof InternationalPhone> = {
  title: "Sinco React/ International Phone",
  component: InternationalPhone,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof InternationalPhone>;

export const PhoneStory: Story = {
  name: "PROGRESOOO",
  render: () => (
    <InternationalPhone
      value={""}
      onChange={function (phone: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  ),
};
