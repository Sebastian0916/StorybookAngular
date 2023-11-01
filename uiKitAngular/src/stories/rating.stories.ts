import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/rating',
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

export const rating: Story = {
  name: 'rating',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-rating [value]="3.35" [precision]="0.01"  />
          <mat-rating [value]="3.35" [precision]="0.01" size="medium"  />
          <mat-rating [value]="3.35" [precision]="0.01" size="large"  />
          <br>
          <br>
          <mat-rating [value]="3.35" [precision]="0.01"  disabled/>
          <mat-rating [value]="3.35" [precision]="0.01" size="medium"  disabled/>
          <mat-rating [value]="3.35" [precision]="0.01" size="large"  disabled/>
      </div>
    `,
  }),

};
  
  
