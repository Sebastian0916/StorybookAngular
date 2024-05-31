import { MatTabsModule } from '@angular/material/tabs';
import { OrientationDirective } from '@sinco/angular';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';

export default {
  title: 'Angular Material/tabs',
  decorators: [
    moduleMetadata({
      declarations: [OrientationDirective],
      imports: [MatTabsModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

type Story = StoryObj;
export const horizontal: Story = {
  name: 'horizontal',
  render: () => ({
    template: `<mat-tab-group color="primary">
    <mat-tab label="First">Content 1</mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group>`,
  }),
};
export const vertical: Story = {
  name: 'vertical',
  render: () => ({
    template: `<mat-tab-group orientation="vertical" color="primary">
    <mat-tab label="First">Content </mat-tab>
    <mat-tab label="Second">Content 2</mat-tab>
    <mat-tab label="Third">Content 3</mat-tab>
  </mat-tab-group>`,
  }),
};
