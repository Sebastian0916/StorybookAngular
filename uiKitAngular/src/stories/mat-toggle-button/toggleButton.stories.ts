import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Button-toggle',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonToggleModule, MatIconModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;


type Story = StoryObj
export const small: Story = {
  name: 'small',
  render: () => ({
    template: `
    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>

    <mat-button-toggle-group name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="italic"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="underline"><mat-icon>home</mat-icon></mat-button-toggle>
  </mat-button-toggle-group>
  `
  })
}
export const medium: Story = {
  name: 'medium',
  render: () => ({
    template: `
    <mat-button-toggle-group size="medium" name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>

    <mat-button-toggle-group size="medium" name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="italic"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="underline"><mat-icon>home</mat-icon></mat-button-toggle>
  </mat-button-toggle-group>
  `
  })
}
export const large: Story = {
  name: 'large',
  render: () => ({
    template: `
    <mat-button-toggle-group size="large" name="fontStyle" aria-label="Font Style">
      <mat-button-toggle value="bold">Bold</mat-button-toggle>
      <mat-button-toggle value="italic">Italic</mat-button-toggle>
      <mat-button-toggle value="underline">Underline</mat-button-toggle>
    </mat-button-toggle-group>

  <mat-button-toggle-group size="large" name="fontStyle" aria-label="Font Style">
    <mat-button-toggle value="bold"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="italic"><mat-icon>home</mat-icon></mat-button-toggle>
    <mat-button-toggle value="underline"><mat-icon>home</mat-icon></mat-button-toggle>
  </mat-button-toggle-group>
  `
  })
}
