import type { Preview } from "@storybook/angular";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Design System', ['Introducción', '*'], 'Clases', ['Clases Globales', 'Layout', '*'], 'Angular Material'],
        locales: 'en-US',
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
