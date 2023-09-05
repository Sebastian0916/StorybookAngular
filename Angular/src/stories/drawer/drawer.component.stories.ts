import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DrawerComponent } from 'src/components/drawer/drawer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';

const meta: Meta<DrawerComponent> = {
  decorators: [
    moduleMetadata({
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule
      ],
    }),
  ],
  title: 'Angular Material/Drawer',
  component: DrawerComponent,
};
export default meta;
type Story = StoryObj<DrawerComponent>;

export const drawerExample: Story = {
  name: 'drawer',
  args: {
    titulo: 'Nombre empresa',
    acciones: false,
    alignEndAcciones: false,
    positionEnd: false,
  },
  argTypes: {
    acciones: {
      options: [true, false],
    },
    alignEndAcciones: {
      options: [true, false],
    },
    positionEnd: {
      options: [true, false],
    },
  },
};
