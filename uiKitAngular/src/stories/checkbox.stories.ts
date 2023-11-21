import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/checkbox',
  decorators: [
    moduleMetadata({
      imports: [AngularModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const checkbox: Story = {
  name: 'checkbox',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-checkbox color="primary" checked>small</mat-checkbox>
          <mat-checkbox color="primary" size="medium" checked>medium</mat-checkbox>
          <mat-checkbox color="primary" size="large" checked>large</mat-checkbox>
          <br>
          <mat-checkbox color="accent" checked>small</mat-checkbox>
          <mat-checkbox color="accent" size="medium" checked>medium</mat-checkbox>
          <mat-checkbox color="accent" size="large" checked>large</mat-checkbox>
          <br>
          <mat-checkbox color="warn" checked>small</mat-checkbox>
          <mat-checkbox color="warn" size="medium" checked>medium</mat-checkbox>
          <mat-checkbox color="warn" size="large" checked>large</mat-checkbox>
      </div>
    `,
  }),

};
  
  
