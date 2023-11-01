import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/toggle-button',
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

export const toggle_button: Story = {
  name: 'togle-button',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-button-toggle-group colorComponent="primary">
          <mat-button-toggle value="button1" >small</mat-button-toggle>
          <mat-button-toggle value="button2">small</mat-button-toggle>
          <mat-button-toggle value="button3">small</mat-button-toggle>
        </mat-button-toggle-group>

        <mat-button-toggle-group colorComponent="primary" size="medium">
            <mat-button-toggle value="button1">medium</mat-button-toggle>
            <mat-button-toggle value="button2">medium</mat-button-toggle>
            <mat-button-toggle value="button3">medium</mat-button-toggle>
        </mat-button-toggle-group>

        <mat-button-toggle-group colorComponent="primary" size="large" >
            <mat-button-toggle value="button1">large</mat-button-toggle>
            <mat-button-toggle value="button2">large</mat-button-toggle>
            <mat-button-toggle value="button3">large</mat-button-toggle>
        </mat-button-toggle-group>
      </div>
    `,
  }),

};
export const toggle_buttons_icons: Story = {
  name: 'togle-button-icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <mat-button-toggle-group >
          <mat-button-toggle value="left" checked>
            <mat-icon>format_align_left</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="center" >
            <mat-icon>format_align_center</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="right" >
            <mat-icon>format_align_right</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="justify" >
            <mat-icon>format_align_justify</mat-icon>
          </mat-button-toggle>
        </mat-button-toggle-group>

        <mat-button-toggle-group size="medium">
          <mat-button-toggle value="left" checked>
            <mat-icon>format_align_left</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="center" >
            <mat-icon>format_align_center</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="right" >
            <mat-icon>format_align_right</mat-icon>
          </mat-button-toggle>
          <mat-button-toggle value="justify" >
            <mat-icon>format_align_justify</mat-icon>
          </mat-button-toggle>
        </mat-button-toggle-group>

        <mat-button-toggle-group size="large">
            <mat-button-toggle value="left" checked >
              <mat-icon>format_align_left</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="center" >
              <mat-icon>format_align_center</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="right" >
              <mat-icon>format_align_right</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="justify" >
              <mat-icon>format_align_justify</mat-icon>
            </mat-button-toggle>
        </mat-button-toggle-group>
      </div>
    `,
  }),

};


export const toggle_buttons_vertical: Story = {
    name: 'togle-button-vertical',
    render: () => ({
      template: `
        <div class="mat-typography ">
          <mat-button-toggle-group vertical colorComponent="primary">
            <mat-button-toggle value="button1" >small</mat-button-toggle>
            <mat-button-toggle value="button2">small</mat-button-toggle>
            <mat-button-toggle value="button3">small</mat-button-toggle>
          </mat-button-toggle-group>
          <br>
          <br>
          <mat-button-toggle-group vertical colorComponent="primary" size="medium">
              <mat-button-toggle value="button1">medium</mat-button-toggle>
              <mat-button-toggle value="button2">medium</mat-button-toggle>
              <mat-button-toggle value="button3">medium</mat-button-toggle>
          </mat-button-toggle-group>
          <br>
          <br>
          <mat-button-toggle-group vertical colorComponent="primary" size="large" >
              <mat-button-toggle value="button1">large</mat-button-toggle>
              <mat-button-toggle value="button2">large</mat-button-toggle>
              <mat-button-toggle value="button3">large</mat-button-toggle>
          </mat-button-toggle-group>
          <br>
          <br>
          <mat-button-toggle-group vertical>
            <mat-button-toggle value="left" checked>
              <mat-icon>format_align_left</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="center" >
              <mat-icon>format_align_center</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="right" >
              <mat-icon>format_align_right</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="justify" >
              <mat-icon>format_align_justify</mat-icon>
            </mat-button-toggle>
          </mat-button-toggle-group>
          <br>
          <br>
          <mat-button-toggle-group size="medium" vertical>
            <mat-button-toggle value="left" checked>
              <mat-icon>format_align_left</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="center" >
              <mat-icon>format_align_center</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="right" >
              <mat-icon>format_align_right</mat-icon>
            </mat-button-toggle>
            <mat-button-toggle value="justify" >
              <mat-icon>format_align_justify</mat-icon>
            </mat-button-toggle>
          </mat-button-toggle-group>
          <br>
          <br>
          <mat-button-toggle-group size="large" vertical>
              <mat-button-toggle value="left" checked >
                <mat-icon>format_align_left</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="center" >
                <mat-icon>format_align_center</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="right" >
                <mat-icon>format_align_right</mat-icon>
              </mat-button-toggle>
              <mat-button-toggle value="justify" >
                <mat-icon>format_align_justify</mat-icon>
              </mat-button-toggle>
          </mat-button-toggle-group>
        </div>
      `,
     }),
  
  };
  
  
