import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertsInfoComponent } from '@sinco/angular';

export default {
  title: 'Angular Material/Alert',
  component: AlertsInfoComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, MatIconModule],
    }),
  ],
} as Meta<AlertsInfoComponent>;

type Story = StoryObj<AlertsInfoComponent>;
export const info: Story = {
  name: 'Alerta info',
  args: {},
  render: () => ({
    template: `
    <app-alerts-info title="Alert info" type="info" mode="standard"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert info" type="info" mode="outlined"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert info" type="info" mode="filled"></app-alerts-info>`,
  }),
};
export const error: Story = {
  name: 'Alerta error',
  args: {},
  render: () => ({
    template: `
    <app-alerts-info title="Alert error" type="error" mode="standard"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert error" type="error" mode="outlined"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert error" type="error" mode="filled"></app-alerts-info>`,
  }),
};
export const success: Story = {
  name: 'Alerta success',
  args: {},
  render: () => ({
    template: `
    <app-alerts-info title="Alert success" type="success" mode="standard"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert success" type="success" mode="outlined"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert success" type="success" mode="filled"></app-alerts-info>`,
  }),
};
export const warning: Story = {
  name: 'Alerta warning',
  args: {},
  render: () => ({
    template: `
    <app-alerts-info title="Alert warning" type="warning" mode="standard"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert warning" type="warning" mode="outlined"></app-alerts-info>
    <br/>
    <app-alerts-info title="Alert warning" type="warning" mode="filled"></app-alerts-info>`,
  }),
};