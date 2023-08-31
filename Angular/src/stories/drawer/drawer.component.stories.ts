import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { SizeDirective } from '@sinco/angular';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { StandardDirective } from 'src/standard/standard.directive';

const meta: Meta<DrawerComponent> = {
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective, StandardDirective],
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatRadioModule,
        ,
        MatInputModule,
      ],
    }),
  ],
  title: 'Angular Material/Drawer',
  component: DrawerComponent,
};
export default meta;
type Story = StoryObj<DrawerComponent> ;

export const drawerExample: Story = {
  name: 'drawer',
  args: {
    titulo: 'Nombre empresa',
    acciones: false,
    alignEndAcciones: false,
    positionEnd: false,
  },
  argTypes:{
    acciones :{
      options: [true,false],
    },
    alignEndAcciones :{
      options: [true,false],
    },
    positionEnd :{
      options: [true,false],
    }
  },
};
