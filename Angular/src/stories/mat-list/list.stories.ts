import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SizeDirective } from '@sinco/angular';
export default {
  title: 'Angular Material/List',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatIconModule, MatListModule],
    }),
  ],
  parameters: {
    layout: "centered"
  }
} as Meta;

type Story = StoryObj
export const small: Story = {
  name: "list-small",
  render: () => ({
    template: `
    <mat-list>
      <mat-list-item>
        <mat-icon matListItemIcon>folder</mat-icon>
        Primary
      </mat-list-item>
      <mat-list-item>
        <mat-icon matListItemIcon>search</mat-icon>
        Secondary
      </mat-list-item>
      <mat-list-item>
        <mat-icon matListItemIcon>person</mat-icon>
        Accent
      </mat-list-item>
    </mat-list>`
  })
}
export const medium: Story = {
  name: "list-medium",
  render: () => ({
    template: `
    <mat-list size="medium">
    <mat-list-item>
    <mat-icon matListItemIcon>folder</mat-icon>
    Primary
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListItemIcon>search</mat-icon>
    Secondary
  </mat-list-item>
  <mat-list-item>
    <mat-icon matListItemIcon>person</mat-icon>
    Accent
  </mat-list-item>
  </mat-list>`
  })
}
