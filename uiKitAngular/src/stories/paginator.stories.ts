import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/paginator',
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

export const buttons: Story = {
  name: 'paginator',
  parameters: {
    backgrounds: {
        default: 'erpBg',
        values: [
          { name: 'erpBg', value: '#f1f0ee' },
        ],
    }
  },
  render: () => ({
    template: `
      <div class="mat-typography ">
          <mat-paginator [length]="100" [pageSize]="10"[pageSizeOptions]="[5, 10, 25, 100]"/>
      </div>
    `,
  }),

};
  
  
