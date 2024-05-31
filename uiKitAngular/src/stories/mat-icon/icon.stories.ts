import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SizeDirective } from '@sinco/angular';
export default {
  title: 'Angular Material/Icon',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule],
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
    template: `
    <mat-icon color="info" size="small">home</mat-icon>
    <mat-icon color="success" size="small">home</mat-icon>
    <mat-icon color="warning" size="small">home</mat-icon>
      `,
  }),
};

export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `
    <mat-icon color="info" size="medium">home</mat-icon>
    <mat-icon color="success" size="medium">home</mat-icon>
    <mat-icon color="warning" size="medium">home</mat-icon>
      `,
  }),
};

export const large: Story = {
  name: 'large',
  render: () => ({
    template: `
    <mat-icon color="info" size="large">home</mat-icon>
    <mat-icon color="success" size="large">home</mat-icon>
    <mat-icon color="warning" size="large">home</mat-icon>
      `,
  }),
};
