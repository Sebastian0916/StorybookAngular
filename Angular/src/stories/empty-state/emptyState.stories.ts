import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { EmptyStateComponent } from 'src/components/empty-state/empty-state.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

export default {
  title: 'Angular Material/EmptyState',
  component: EmptyStateComponent,
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule, MatCardModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    estado: {
      options: ['error', 'create', 'no-result', 'search'],
      control: { type: 'radio' },
      description:
        'El estado define la apariencia y acciones del empty state. Este último consta únicamente de cuatro estados, y las acciones solo son visibles en el estado "create".',
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
  },
} as Meta<EmptyStateComponent>;

type Story = StoryObj<EmptyStateComponent>;

export const EmptyState: Story = {
  args: {
    estado: 'create',
    titulo: 'Titulo del empty state',
    contenido: 'Contenido del empty state',
  },
};
