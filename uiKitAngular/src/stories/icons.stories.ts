import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/icons',
  decorators: [
    moduleMetadata({
      imports: [AngularModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const icons: Story = {
  name: 'icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-icon  fontIcon="home" size="small"/>
          <mat-icon  fontIcon="home" size="medium"/>
          <mat-icon  fontIcon="home" size="large"/>
      </div>
    `,
  }),

};
  
  
