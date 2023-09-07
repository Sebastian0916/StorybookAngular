import type { Meta } from "@storybook/react";
import {
  Button,
  ThemeProvider,
  Typography,
  Box,
  TextField,
} from "@mui/material";

import DrawerComponent from "./drawer";
import { SincoTheme } from "@sinco/react";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";

const meta: Meta<typeof DrawerComponent> = {
  title: "Components/DrawerComponent",
  component: DrawerComponent,
  decorators: [
    (Story) => (
      <ThemeProvider theme={SincoTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export default meta;
export const Drawer = {
  name: "drawer component",
  args: {
    open: true,
    titulo: "Nombre empresa",
    anchor: "left",
    children: (
      <>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField label="Nombre" variant="outlined" size="small" />
          <TextField label="Apellido" variant="outlined" size="small" />
          <TextField
            label="Edad"
            variant="outlined"
            size="small"
            type="number"
          />
        </Box>
        <Typography variant="body2" color="text.primary">
          Al hacer click en algun elemento del contenido del drawer se muestran
          las acciones
        </Typography>
      </>
    ),
    acciones: (
      <>
        <Button color="primary" variant="contained" size="small"
        >
          Cerrar
        </Button>
        <Button color="primary" variant="contained" size="small">
          Cerrar
        </Button>
      </>
    ),
  },
};
