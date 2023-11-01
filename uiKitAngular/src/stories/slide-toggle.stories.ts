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
        <mat-slide-toggle checked color="primary">small</mat-slide-toggle>
        <mat-slide-toggle checked color="primary" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked color="accent">small</mat-slide-toggle>
        <mat-slide-toggle checked color="accent" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked color="warn">small</mat-slide-toggle>
        <mat-slide-toggle checked color="warn" size="medium">medium</mat-slide-toggle>
        <br>
        <br>
        <mat-slide-toggle checked color="success">small</mat-slide-toggle>
        <mat-slide-toggle checked color="success" size="medium">medium</mat-slide-toggle>

        
      </div>
    `,
  }),

};
  
  
