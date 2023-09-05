import type { Meta } from "@storybook/react";
import PageHeader from "./PageHeader";
import { Button, Tabs, Tab, Stack } from "@mui/material";
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
        <Stack marginLeft={-0}>
          <Story />
        </Stack>
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
export const Page = {
  name: "PageHeader",
  args: {
    breadcrumbs: [
      {
        name: "Link",
        link: "https://www.chromatic.com/manage?appId=64ef884812b813707d138f9c&view=configure",
      },
      {
        name: "Link",
        link: "https://www.chromatic.com/manage?appId=64ef884812b813707d138f9c&view=configure",
      },
      {
        name: "Link",
        link: "https://www.chromatic.com/manage?appId=64ef884812b813707d138f9c&view=configure",
      },
    ],
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
    tabs: (
      <Tabs
        value={1}
        onChange={() => {}}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    ),
  },
};
export const PageTabs = {
  name: "PageTabs",
  args: {
    title: "Title",
    subtitle: "Subtitle",
    tabs: (
      <Tabs
        value={1}
        onChange={() => {}}
        indicatorColor="primary"
        textColor="inherit"
        variant="fullWidth"
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
      </Tabs>
    ),
  },
};
export const PageActions = {
  name: "PageActions",
  args: {
    title: "Title",
    subtitle: "Subtitle",
    actions: <Button size="small">Actions</Button>,
  },
};
// eslint-disable-next-line storybook/prefer-pascal-case
export const pageHeader = {
  args: {
    title: "Title",
    subtitle: "Subtitle",
  },
};
