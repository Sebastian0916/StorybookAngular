import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from '@sinco/angular';

export default {
  title: 'ChipComponent',
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule, MatIconModule],
    }),
  ],
} as Meta<ChipComponent>;

type Story = StoryObj;

export const Primary: Story = {
  args: {
    arrayChips: [
      {
        texto: 'Chip numero 1',
        selected: true,
        color: 'warn',
        size: 'small',
      },
      {
        texto: 'Chip numero 2',
        selected: true,
        color: 'primary',
        icono: 'home',
        variante: 'stroked',
        cancel: true,
      },
      {
        texto: 'Chip numero 3',
        selected: true,
        color: 'success',
        icono: 'home',
        variante: 'stroked',
      },
      {
        selected: true,
        color: 'caution',
        texto: 'Chip numero 4',
        variante: 'stroked',
      },
      {
        color: 'primary',
        texto: 'Chip numero 4',
        variante: 'stroked',
      },
    ],
  },
};
