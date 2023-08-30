import { MatButtonModule } from '@angular/material/button';
import { SizeDirective } from '@sinco/angular';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DrawerComponent } from 'src/components/drawer/drawer.component';

const meta: Meta<DrawerComponent> = {
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule],
    }),
  ],
  title: 'Angular Material/Drawer',
  component: DrawerComponent,
};
export default meta;
type Story = StoryObj<DrawerComponent>;

export const drawerExample: Story = {
  name: 'drawer',
  render: () => ({
    template: `
    <app-drawer titulo='Nombre empresa'> 
          <ng-template #drawerContenido>
            <div>
            <button mat-button size="small" >Show Actions</button>
            </div>
          </ng-template>
    
          <ng-template #drawerAcciones >
            <div>
              <button mat-button color="primary">cerrar</button>
              <button mat-raised-button color="primary">Guardar</button>
            </div>
          </ng-template>
      </app-drawer>
  `,
  }),
};

