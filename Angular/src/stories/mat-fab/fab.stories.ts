import { MatButtonModule } from '@angular/material/button';
import { moduleMetadata, StoryObj, Meta } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/button-fab',
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
export const fab: Story = {
  name: 'fab',
  render: () => ({
    template: `
    <button mat-fab><mat-icon>home</mat-icon></button>
    <button mat-fab size="medium"><mat-icon>home</mat-icon></button>
    <button mat-fab size="large"><mat-icon>home</mat-icon></button>
    `,
  }),
};
export const fabExtended: Story = {
  name: 'fab-extended',
  render: () => ({
    template: `
    <button mat-fab extended>Theme<mat-icon>home</mat-icon></button>
    <button mat-fab size="medium" extended>Theme<mat-icon>home</mat-icon></button>
    <button mat-fab size="large" extended>Theme<mat-icon>home</mat-icon></button>
    `,
  }),
};
