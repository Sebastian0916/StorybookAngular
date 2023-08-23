
import { MatButtonModule } from '@angular/material/button';
import { SizeDirective } from '@sinco/angular';
import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DrawerComponent } from 'src/components/drawer/drawer.component';

const meta: Meta<DrawerComponent> ={
  decorators: [
    moduleMetadata({
      declarations: [SizeDirective],
      imports: [MatButtonModule],
    }),
  ],
  title: 'Angular Material/Drawer',
  component: DrawerComponent
}
export default meta;
type Story = StoryObj<DrawerComponent>;

export const drawerExample: Story = {
  name: 'drawer',
  args:{
  },
  render: () => ({
    template: `
    <sinco-drawer titulo='Nombre empresa'>
          <ng-template #drawerEncabezado>
            <button mat-icon-button size="small">
              <mat-icon size="small" (click)="drawer.close()">close</mat-icon>
            </button>
          </ng-template>
    
          <ng-template #drawerContenido>
            <div>
              <mat-chip class="color-white">chip</mat-chip>
            </div>
            <p>Contenido drawer</p>
          </ng-template>
    
          <ng-template #drawerAcciones class="row" >
            <div>
              <button mat-button color="primary">cerrar</button>
              <button mat-raised-button color="primary">Guardar</button>
            </div>
          </ng-template>
      </sinco-drawer>
  `,
  }),
};
