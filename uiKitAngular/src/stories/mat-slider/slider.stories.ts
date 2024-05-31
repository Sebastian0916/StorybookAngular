import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { SizeDirective } from '@sinco/angular';
import { MatSliderModule } from '@angular/material/slider';

export default {
  title: 'Angular Material/slider',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatSliderModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj

export const small: Story = {
  name: 'small',
  render: () => ({
    template: `
    <mat-slider>
      <input matSliderThumb />
    </mat-slider>`
  })
};
export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `
    <mat-slider size="medium">
      <input matSliderThumb />
    </mat-slider>`
  })
};
