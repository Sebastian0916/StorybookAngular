import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Icon button',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule, MatIconModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

type Story = StoryObj;
export const small: Story = {
  name: 'small',
  render: () => ({
    template: `<button mat-icon-button color="success" size="small"><mat-icon>favorite</mat-icon></button>`,
  }),
};

export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `<button mat-icon-button color="info" size="medium"><mat-icon>favorite</mat-icon></button>`,
  }),
};

export const large: Story = {
  name: 'large',
  render: () => ({
    template: `<button mat-icon-button color="warning" size="large"><mat-icon>favorite</mat-icon></button>`,
  }),
};
