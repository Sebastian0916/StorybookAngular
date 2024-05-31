import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Button',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule, MatIconModule],
    }),
  ], parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj
export const small: Story = {
  name: 'small',
  render: () => ({
    template: `<button mat-raised-button color="primary" size="small">Button</button>`,
  }),
};
export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `<button mat-raised-button color="success" size="medium">Button</button>`
  }),
};
export const large: Story = {
  name: 'large',
  render: () => ({
    template: `<button mat-raised-button color="warning" size="large">Button</button>`
  }),
};
