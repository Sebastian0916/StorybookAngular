import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'Angular Material/menu',
  decorators: [
    moduleMetadata({
      imports: [AngularModule,BrowserAnimationsModule],
    }),
  ],
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs']
} as Meta;
type Story = StoryObj;

export const menu: Story = {
  name: 'menu',
  render: () => ({
    template: `
      <div class="mat-typography ">
            <button mat-stroked-button [matMenuTriggerFor]="menuSmall" color="primary">small</button>
            <mat-menu #menuSmall="matMenu" panelclass="">
              <button mat-menu-item>
                <span>Redial</span>
              </button>
              <button mat-menu-item disabled>
                <span>Check voice mail</span>
              </button>
              <button mat-menu-item>
                <span>Disable alerts</span>
              </button>
            </mat-menu>
            <br>
            <br>
            <button mat-stroked-button [matMenuTriggerFor]="menuMedium" color="primary">medium</button>
            <mat-menu #menuMedium="matMenu" panelclass="">
              <button mat-menu-item>
                <span>Redial</span>
              </button>
              <button mat-menu-item disabled>
                <span>Check voice mail</span>
              </button>
              <button mat-menu-item>
                <span>Disable alerts</span>
              </button>
            </mat-menu>
      </div>
    `,

  }),

};
  
  
