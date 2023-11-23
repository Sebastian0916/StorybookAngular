import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/slide-toggle',
  decorators: [
    moduleMetadata({
      imports: [AngularModule,MatSlideToggleModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const slide_toggle: Story = {
  name: 'slide-toggle',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-slide-toggle hideIcon >small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle hideIcon  size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="primary">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="primary" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="accent">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="accent" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="warn">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="warn" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="success">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="success" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="info">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="info" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="warning">small</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked hideIcon color="warning" size="medium">medium</mat-slide-toggle>

        
      </div>
    `,
  }),

};
  
  
