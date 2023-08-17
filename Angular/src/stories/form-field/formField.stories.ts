import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SizeDirective } from '@sinco/angular';
import { StandardDirective } from 'src/standard/standard.directive';

export default {
  title: 'Angular material/Form-field',
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective, StandardDirective],
      imports: [MatInputModule, MatIconModule, MatFormFieldModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },
} as Meta;

type Story = StoryObj;

export const fill: Story = {
  name: 'Fill',
  render: () => ({
    template: `
    <mat-form-field [appearance]="'fill'">
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    &nbsp;
    <mat-form-field size="medium" [appearance]="'fill'">
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    `,
  }),
};
export const outline: Story = {
  name: 'Outline',
  render: () => ({
    template: `
    <mat-form-field [appearance]="'outline'">
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    &nbsp;
    <mat-form-field size="medium" [appearance]="'outline'">
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    `,
  }),
};
export const standard: Story = {
  name: 'Standard',
  render: () => ({
    template: `
    <mat-form-field standard>
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    &nbsp;
    <mat-form-field size="medium" standard>
      <mat-label>Fill form field</mat-label>
      <input matInput placeholder="Placeholder" />
      <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>
    </mat-form-field>
    `,
  }),
};
