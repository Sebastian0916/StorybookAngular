import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "alphabetical",
        order: [
          "Design System",
          ["Introducción", "*"],
          "Components",
          [
            "Autocomplete",
            "Button",
            "ButtonGroup",
            "Checkbox",
            "Fab",
            "Radio",
            "Rating",
            "Select",
            "Slider",
            "Switch",
            "TextField",
            "ToggleButton",
            "Avatar",
            "Chip",
            "SvgIcon",
            "List",
            "Table",
            "Typography",
            "Alert",
            "CircularProgress",
            "Accordion",
            "Menu",
            "Pagination",
            "SpeedDial",
            "Tabs",
          ],
        ],
        locales: "en-US",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
