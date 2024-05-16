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
    template: `<p><mat-slide-toggle labelPosition="after">!Theme </mat-slide-toggle></p>`
  })
}
export const medium: Story = {
  name: 'mat-slide-toggle',
  render: () => ({
    template: `<mat-slide-toggle size="medium">Theme!</mat-slide-toggle>`
  })
}
