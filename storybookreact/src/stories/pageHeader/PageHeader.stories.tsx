import type { Meta } from "@storybook/react";
import PageHeader from "./PageHeader";
import { Button, Tabs, Tab, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { SincoTheme } from "@sinco/react";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    breadcrumbs: {
      description:
        "BreadCrumbs nos da la oportunindad de poder hacer ruteos de links ",
    },
    actions: {
      description: "Las acciones que se podran agregar en el pageheader",
    },
    tabs: {
      description:
        "Cuando la vista tenga mucha informacion podemos utilizar esta opción",
    },
  },
};
export default meta;

export const PageActions = {
  name: "PageActions",
  args: {
    back: (
      <IconButton size="small" color="primary">
        <ArrowBack fontSize="small" />
      </IconButton>
    ),
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
  },
};
