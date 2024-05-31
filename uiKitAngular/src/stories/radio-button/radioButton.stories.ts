import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatRadioModule } from '@angular/material/radio';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Radio-Button',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatRadioModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj

export const small: Story = {
  name: "small",
  render: () => ({
    template: `<mat-radio-button>Theme</mat-radio-button>
    `
  })
}

export const medium: Story = {
  name: "medium",
  render: () => ({
    template: `<mat-radio-button size="medium">Theme</mat-radio-button>
    `
  })
}
