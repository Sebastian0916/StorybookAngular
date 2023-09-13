import type { Meta } from "@storybook/react";
import { Button, ThemeProvider } from "@mui/material";
import { SincoTheme } from "@sinco/react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import { footerAction } from "./footerAction";

const meta: Meta<typeof footerAction> = {
  title: "Components/footerAction",
  component: footerAction,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 150,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    cantidadCamposModifcados: {
      description:
        "Puede contener botones para acciones específicas, como guardar o cancelar un cambio realizado ",
    },
  },
};
export default meta;
export const FooterAction = {
  name: "EN PROCESO..",
  args: {
    cantidadCamposModifcados: 2,
    leftContent: (
      <Button size="small">Action</Button>
    ),
    rightContent: (
      <>
        <Button variant="text" size="small">Action</Button>
        <Button
          variant="contained"
          size="small"
          endIcon={<ArrowForwardIcon fontSize="small" />}
        >
          Action
        </Button>
      </>
    ),
  },
};
