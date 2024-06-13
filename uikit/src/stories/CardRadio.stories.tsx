import { ThemeProvider } from "@emotion/react";
import { Stack } from "@mui/material";
import { CardRadio, SincoTheme } from "@sinco/react";
import img from "../assets/Ilustracion.svg";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { useState } from "react";

const meta: Meta<typeof CardRadio> = {
  title: "sinco react/Card Radio",
  component: CardRadio,
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

type Story = StoryFn | StoryObj<typeof CardRadio>;

export const CardRadioStory: Story = () => {
  const [prueba, setPrueba] = useState(0);

  return (
    <CardRadio
      header="Header title CardRadio"
      color="primary"
      states="active"
      RadioPosition="right"
      topRadioPosition={true}
      content="Content text card radio"
      media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
      onChange={(value) => setPrueba(value as number)}
      checked={prueba === 0}
      value={0}
    />
  );
};

export const CardRadioOptions: Story = () => {
  const [prueba, setPrueba] = useState(0);

  return (
    <Stack flexDirection={"row"} gap={1}>
      <CardRadio
        media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
        header="Header title CardRadio"
        color="primary"
        states="active"
        RadioPosition="left"
        topRadioPosition={true}
        content="Content text card radio"
        onChange={(value) => setPrueba(value as number)}
        checked={prueba === 0}
        value={0}
      />
      <CardRadio
        header="Header title CardRadio"
        color="secondary"
        states="disabled"
        RadioPosition="right"
        topRadioPosition={false}
        content="Content text card radio"
        onChange={(value) => setPrueba(value as number)}
        media={<img src={img} alt="a" style={{ height: 40, width: 40 }} />}
        checked={prueba === 1}
        value={1}
      />
    </Stack>
  );
};
