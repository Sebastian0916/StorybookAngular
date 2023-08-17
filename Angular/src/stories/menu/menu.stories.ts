import { MatMenuModule } from '@angular/material/menu';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Menu',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatMenuModule, MatButtonModule, BrowserAnimationsModule, MatIconModule],
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
    template: `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>`
  })
}
export const medium: Story = {
  name: "medium",
  render: () => ({
    template: `
    <button mat-icon-button [matMenuTriggerFor]="menu">
      <mat-icon>home</mat-icon>
    </button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>Item 1</button>
      <button mat-menu-item>Item 2</button>
    </mat-menu>`
  })
}
