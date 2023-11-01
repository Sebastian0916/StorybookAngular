import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/radio-button',
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

export const radio_buttons: Story = {
  name: 'radio-button',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-radio-button value="1" checked color="primary">small</mat-radio-button>
          <mat-radio-button value="2" size="medium" checked color="primary">medium</mat-radio-button>
          <mat-radio-button value="2" size="large" checked color="primary">large</mat-radio-button>
          <br>
          <br>
          <mat-radio-button value="1" checked color="accent">small</mat-radio-button>
          <mat-radio-button value="2" size="medium" checked color="accent">medium</mat-radio-button>
          <mat-radio-button value="2" size="large" checked color="accent">large</mat-radio-button>
          <br>
          <br>
          <mat-radio-button value="1" checked color="warn">small</mat-radio-button>
          <mat-radio-button value="2" size="medium" checked color="warn">medium</mat-radio-button>
          <mat-radio-button value="2" size="large" checked color="warn">large</mat-radio-button>
      </div>
    `,
  }),

};
  
  
