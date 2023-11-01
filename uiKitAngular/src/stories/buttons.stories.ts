import { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { AngularModule } from '@sinco/angular';

export default {
  title: 'Angular Material/buttons',
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
  name: 'button',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <button mat-raised-button color="primary">Button</button>
          <button mat-raised-button color="primary" size="medium">Button</button>
          <button mat-raised-button color="primary" size="large">Button</button>
      </div>
    `,
  }),

};


export const buttons_icons: Story = {
  name: 'buttons-icons',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <button mat-raised-button color="primary">
            <mat-icon>delete</mat-icon>
            Button
          </button>
          <button mat-raised-button color="primary" size="medium">
            <mat-icon>delete</mat-icon>
            Button
          </button>
          <button mat-raised-button color="primary" size="large">
            <mat-icon>delete</mat-icon>
            Button
          </button>
          <br>
          <br>
          <button mat-raised-button color="primary">
            <mat-icon iconPositionEnd>delete</mat-icon>
            Button
          </button>
          <button mat-raised-button color="primary" size="medium">
            <mat-icon iconPositionEnd>delete</mat-icon>
            Button
          </button>
          <button mat-raised-button color="primary" size="large">
            <mat-icon iconPositionEnd>delete</mat-icon>
            Button
          </button>
      </div>
    `,
  }),

};


export const icon_buttons: Story = {
  name: 'icons-button',
  render: () => ({
    template: `
      <div class="mat-typography ">
          <button mat-icon-button >
            <mat-icon>adjust</mat-icon>
          </button>
          <button mat-icon-button size="small">
            <mat-icon size="medium">adjust</mat-icon>
          </button>
          <button mat-icon-button size="small">
            <mat-icon size="large">adjust</mat-icon>
          </button>
  
          <button mat-icon-button size="medium">
            <mat-icon size="small">adjust</mat-icon>
          </button>
          <button mat-icon-button size="medium">
            <mat-icon>adjust</mat-icon>
          </button>
          <button mat-icon-button size="medium">
            <mat-icon size="large">adjust</mat-icon>
          </button>
      </div>
    `,
  }),

};


export const button_fab: Story = {
  name: 'button-fab',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <button mat-fab color="primary">
          <mat-icon>adjust</mat-icon>
        </button>
        <button mat-fab color="primary" size="medium">
          <mat-icon>adjust</mat-icon>
        </button>
        <button mat-fab color="primary" size="large">
          <mat-icon>adjust</mat-icon>
        </button>
      </div>
    `,
  }),

};

export const button_fab_extend: Story = {
  name: 'button-fab-extend',
  render: () => ({
    template: `
      <div class="mat-typography ">
        <button mat-fab extended color="primary"><mat-icon>add</mat-icon>Fab</button>
        <button mat-fab extended color="primary" size="medium"><mat-icon>add</mat-icon>Fab</button>
        <button mat-fab extended color="primary" size="large"><mat-icon>add</mat-icon>Fab</button>
        <br>
        <br>
        <button mat-fab extended color="primary"><mat-icon iconPositionEnd>add</mat-icon>Fab</button>
        <button mat-fab extended color="primary" size="medium"><mat-icon iconPositionEnd>add</mat-icon>Fab</button>
        <button mat-fab extended color="primary" size="large"><mat-icon iconPositionEnd>add</mat-icon>Fab</button>
      </div>
    `,
  }),

};