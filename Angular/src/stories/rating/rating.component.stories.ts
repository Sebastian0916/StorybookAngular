import { MatIconModule } from '@angular/material/icon';
import { Meta, moduleMetadata } from '@storybook/angular';
import { RatingComponent, SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/RatingComponent',
  component: RatingComponent,
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule],
    }),
  ],
  parameters: {
    layout: "centered"
  },

  tags: ['autodocs']
} as Meta<RatingComponent>;

export const rating = {
  args: {
    size: "small",
    value: 0,
    max: 5,
    precision: 1,
    disabled: false,
  },
};