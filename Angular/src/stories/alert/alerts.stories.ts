import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AlertsInfoComponent } from 'src/components/alerts-info/alerts-info.component';

export default {
  title: 'Angular Material/Alert',
  component: AlertsInfoComponent,
  decorators: [
    moduleMetadata({
      imports: [MatCardModule, MatButtonModule, MatIconModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    title: {
      description: "Escribe cualquier titulo para tu alerta",
    },
    type: {
      description: "Con esta propiedad podemos cambiar el tipo de alerta que querramos como: success, info,warning, error",
      table: {
        defaultValue: { summary: 'info' }
      }
    },
    mode: {
      description: "Propiedad que nos permite cambiar el tipo de alerta como:standard,filled y outlined",
      table: {
        defaultValue: { summary: 'standard' }
      }
    }
  }
} as Meta<AlertsInfoComponent>;

type Story = StoryObj<AlertsInfoComponent>;
export const info: Story = {
  name: 'Alerta info',
  args: {
    title: "Title",
    type: "info",
    mode: "standard",
    content: "Content"
  },

};
export const error: Story = {
  name: 'Alerta error',
  args: {
    title: "Title",
    type: "error",
    mode: "standard",
    content: "Content"
  },

};
export const success: Story = {
  name: 'Alerta success',
  args: {
    title: "Title",
    type: "success",
    mode: "standard",
    content: "Content"
  },
};
export const warning: Story = {
  name: 'Alerta warning',
  args: {
    title: "Title",
    type: "warning",
    mode: "standard",
    content: "Content"
  },
};