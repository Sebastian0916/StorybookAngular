import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { SizeDirective } from '@sinco/angular';

export default {
  title: 'Angular Material/Chip',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatChipsModule, MatIconModule],
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
    template: `
    <mat-chip>Theme</mat-chip>
    <mat-chip>
     <button matChipRemove>
      <mat-icon>cancel</mat-icon>
      </button>
       Theme
    </mat-chip>
    `
  })
}
export const medium: Story = {
  name: "medium",
  render: () => ({
    template: `
    <mat-chip size="medium" removable highlighted color="primary">Theme</mat-chip>
    <mat-chip size="medium" removable highlighted color="primary">
     <button matChipRemove>
      <mat-icon>cancel</mat-icon>
      </button>
       Theme
    </mat-chip>
    `
  })
}
