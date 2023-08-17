import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export default {
  title: 'Angular Material/Progress',
  decorators: [
    moduleMetadata({
      imports: [MatProgressSpinnerModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

type Story = StoryObj;

export const ProgressSpinner: Story = {
  render: () => ({
    template: `<mat-spinner></mat-spinner>
    `,
  }),
};
