import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/slider',
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

export const slider: Story = {
  name: 'slider',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-slider >
            <input matSliderThumb>
        </mat-slider>
        <mat-slider size="medium">
            <input matSliderThumb>
        </mat-slider>
        <br>
        <mat-slider color="accent" >
            <input matSliderThumb>
        </mat-slider>
        <mat-slider color="accent" size="medium">
            <input matSliderThumb>
        </mat-slider>
        <br>
        <mat-slider color="warn" >
            <input matSliderThumb>
        </mat-slider>
        <mat-slider color="warn" size="medium">
            <input matSliderThumb>
        </mat-slider>
        <br>
        <mat-slider min="200" max="500">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
        <mat-slider min="200" max="500" size="medium">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
        <br>
        <mat-slider min="200" max="500" color="accent">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
        <mat-slider min="200" max="500" color="accent" size="medium">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
        <br>
        <mat-slider min="200" max="500" color="warn">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
        <mat-slider min="200" max="500" color="warn" size="medium">
          <input value="300" matSliderStartThumb>
          <input value="400" matSliderEndThumb>
        </mat-slider>
       
      </div>
    `,
  }),

};
  
  
