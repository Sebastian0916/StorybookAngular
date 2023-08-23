import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ChipComponent } from '@sinco/angular';

export default {
  title: 'Angular Material/Chips',
  component: ChipComponent,
  decorators: [
    moduleMetadata({
      imports: [MatChipsModule, MatIconModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs']
} as Meta<ChipComponent>;

type Story = StoryObj;

export const primary: Story = {
  name: "Chip",
  args: {
    arrayChips: [
      {
        texto: 'Chip numero 2',
        selected: true,
        color: 'primary',
        icono: 'home',
        variante: 'stroked',
        cancel: true,
      },
    ],
  },
};
