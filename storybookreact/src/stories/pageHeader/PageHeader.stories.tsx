import type { Meta } from "@storybook/react";
import { Button, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

import { SincoTheme } from "@sinco/react";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { PageHeaderComponent } from "@sinco/react";

const meta: Meta<typeof PageHeaderComponent> = {
  title: "Components/PageHeader",
  component: PageHeaderComponent,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <div style={{ height: "56px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    actions: {
      description: "Las acciones que se podran agregar en el pageheader",
    },
    fixed: {
      description: "Ahora el pageHader podrá tener una posición fixed o no",
    },
  },
};
export default meta;

export const PageActions = {
  name: "PageActions",
  args: {
    fixed: false,
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
    back: (
      <IconButton size="small" color="primary">
        <ArrowBack fontSize="small" />
      </IconButton>
    ),
  },
};
