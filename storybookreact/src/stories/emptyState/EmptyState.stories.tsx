import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EmptyState from "./EmptyState";

const meta: Meta<typeof EmptyState> = {
  title: "Components/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
  args: {
    state: "create",
    title: "Titulo del empty state",
    content: "Contenido del empty state",
    actions: (
      <>
        <Button variant="text" size="small">
          Crear
        </Button>
        <Button
          variant="outlined"
          size="small"
          startIcon={<AddIcon fontSize="small" />}
        >
          Crear
        </Button>
      </>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Empty: Story = {
  name: "EmptyState",
  argTypes: {
    state: {
      options: ["error", "create", "no-result", "search"],
      control: { type: "radio" },
      description:
        'El state define la apariencia y acciones del empty state. Este último consta únicamente de cuatro estados, y las acciones solo son visibles en el State "create".',
    },
    title: {
      type: "string",
      description:
        "El title del empty state es una etiqueta 'Typography' con la variante 'h6', que contiene la razón por la cual se encuentra en dicho estado",
    },
    content: {
      type: "string",
      description:
        " El content consiste en un texto que proporciona información adicional sobre la causa del estado o las acciones posibles para resolverlo",
    },
    actions: {
      description:
        'Actions están diseñadas para recibir elementos del tipo HTMLButtonElement. Estos botones se visualizan utilizando un ReactNode dentro de la etiqueta del componente, donde se utiliza la propiedad "actions={}" para insertarlos y mostrarlos.',
    },
  },
};
