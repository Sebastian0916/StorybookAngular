import { Meta, StoryObj } from '@storybook/angular';
import { EmptyStateComponent } from '@sinco/angular';

export default {
  title: 'Angular Material/EmptyState',
  component: EmptyStateComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    estado: {
      options: ['error', 'crear', 'sinresultado', 'busqueda'],
      control: { type: 'radio' },
      description:
        'El estado define la apariencia y acciones del empty state. Este último consta únicamente de cuatro estados.',
    },
    titulo: {
      type: 'string',
      description:
        'El título del empty state es una etiqueta "<h6>" que contiene la razón por la cual se encuentra en dicho estado',
    },
    contenido: {
      type: 'string',
      description:
        ' El contenido consiste en un texto que proporciona información adicional sobre la causa del estado o las acciones posibles para resolverlo',
    },
    acciones: {
      description:
        'Las acciones están diseñadas para recibir elementos del tipo HTMLButtonElement. Estos botones se visualizan utilizando ng-templates dentro de la etiqueta del componente, donde se utiliza el identificador "#acciones" para insertarlos y mostrarlos.',
    },
    alturaContenedor: {
      description:
        "Define la altura del contenedor que envuelve todo el componente. De manera predeterminada, se establece en '100%', lo que significa que el contenedor se expandirá para ocupar todo el espacio disponible. También puede ser personalizado utilizando valores en porcentaje en relación al contenedor padre o en píxeles según las necesidades.",
    },
    alturaIlustracion: {
      description:
        "Define la altura de la ilustración dentro del componente. De manera predeterminada, se establece en '210px', pero puedes personalizarlo utilizando valores en píxeles u otras unidades según las necesidades.",
    },
    anchoIlustracion: {
      description:
        "Define el ancho de la ilustración dentro del componente. De manera predeterminada, se establece en '210px', pero puedes personalizarlo utilizando valores en píxeles u otras unidades según las necesidades.",
    },
  },
} as Meta;

type Story = StoryObj;

export const emptyState: Story = {
  name: "EmptyState",
  args: {
    estado: 'crear',
    titulo: 'Titulo del empty state',
    contenido: 'Contenido del empty state',
    anchoIlustracion: '210px',
    alturaIlustracion: '185px',
    alturaContenedor: '100%',
  },
};
