import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/slide-toggle',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatSlideToggleModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj
export const small: Story = {
  name: 'mat-slide-toggle',
  render: () => ({
    template: `<mat-slide-toggle>Theme!</mat-slide-toggle>`
  })
}
export const medium: Story = {
  name: 'mat-slide-toggle',
  render: () => ({
    template: `<mat-slide-toggle size="medium">Theme!</mat-slide-toggle>`
  })
}
