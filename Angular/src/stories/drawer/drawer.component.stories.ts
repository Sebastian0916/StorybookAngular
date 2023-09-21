import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DrawerComponent } from 'src/components/drawer/drawer.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { Component, Input, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-drawer-container',
  template:`
  <div style="height: 90vh;" class="row align-items-center justify-content-center">
    <mat-drawer-container>
        <mat-drawer #drawer  >   
            <app-drawer titulo="nombre empresa" [alignEnd]="alignEnd"  [acciones]="acciones" [positionEnd]="positionEnd">
                <ng-template #drawerEncabezado>
                  <span class="mat-h4 color-text-rimary">Titulo</span>
                  <button mat-icon-button (click)="drawer.close()">
                    <mat-icon>close</mat-icon>
                  </button>
                </ng-template>
                             
                <ng-template #drawerContenido >
                  <div class="col column gap-2 px-0" >
                    <mat-form-field appearance="outline"  >
                      <mat-label>form field 1</mat-label>
                      <input matInput placeholder="Placeholder">
                    </mat-form-field>
                    <mat-form-field appearance="outline"  >
                      <mat-label>form field 3</mat-label>
                      <input matInput placeholder="Placeholder">
                    </mat-form-field>
                    <mat-form-field appearance="outline"  >
                      <mat-label>form field 3</mat-label>
                      <input matInput placeholder="Placeholder">
                    </mat-form-field>
                  </div>
                </ng-template>
                             
                <ng-template #drawerAcciones >
                  <button mat-button color="primary">Cerrar</button>
                  <button mat-flat-button color="primary">Guardar</button>
                </ng-template>    
            </app-drawer>     
        </mat-drawer>                
    </mat-drawer-container>
    
    <button mat-raised-button color="warn" (click)="drawer.toggle()" >Toggle drawer</button>
    
  </div>  
  `
})
class ContainerComponent {
  @Input() alignEnd!: boolean ;
  @Input() acciones!: boolean;
  @Input() positionEnd!: boolean;

  @ViewChild('drawer',{static:true})drawer!:MatDrawer;

  ngOnInit(): void {
    this.drawer.open();
  }

}

const meta: Meta<ContainerComponent> = {
  decorators: [
    moduleMetadata({
      declarations:[DrawerComponent],
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatSidenavModule
      ],
      
    }),
  ],
  title: 'Angular Material/Drawer',
  tags:['autodocs'],
  component: ContainerComponent,
};
export default meta;
type Story = StoryObj<ContainerComponent>;

export const drawerExample: Story = {
  name: 'drawer',
  args: {
    positionEnd: false,
    acciones: true,
    alignEnd: true,
  },
  argTypes: {
    acciones: {
      options: [true, false],
      description:'Seccion que interactua con el contenido. Se despliega al hacer click en algun elemento dentro de la seccion de contenido.',
      defaultValue: { summary: false }

    },
    alignEnd: {
      options: [true, false],
      description:'Posiciona el contenido de la acciones a la derecha.',
      defaultValue: { summary: true }

    },
    positionEnd: {
      options: [true, false],
      description:'Alinea el drawer a la derecha'
    },
  },
  parameters:{
    layout: 'fullscreen', 
    docs:{
      source:{
        code:`
            <mat-drawer-container>
              <mat-drawer #drawer>   
                  <app-drawer titulo="nombre empresa" [alignEnd]="true"  [acciones]="true" [positionEnd]="true">
                      <ng-template #drawerEncabezado>
                        <span class="mat-h4 color-text-rimary">titulo de encabezado </span>
                        <button mat-icon-button (click)="drawer.close()">
                          <mat-icon>close</mat-icon>
                        </button>
                      </ng-template>
                                   
                      <ng-template #drawerContenido >
                        <div class="col column gap-2 px-0" >
                          <mat-form-field appearance="outline"  >
                            <mat-label>form field 1</mat-label>
                            <input matInput placeholder="Placeholder">
                          </mat-form-field>
                          <mat-form-field appearance="outline"  >
                            <mat-label>form field 3</mat-label>
                            <input matInput placeholder="Placeholder">
                          </mat-form-field>
                          <mat-form-field appearance="outline"  >
                            <mat-label>form field 3</mat-label>
                            <input matInput placeholder="Placeholder">
                          </mat-form-field>
                        </div>
                      </ng-template>
                                   
                      <ng-template #drawerAcciones >
                        <button mat-button color="primary">reiniciar<mat-icon>refresh</mat-icon></button>
                        <button mat-flat-button color="primary">enviar<mat-icon>send</mat-icon></button>
                      </ng-template>    
                  </app-drawer>     
              </mat-drawer>                
          </mat-drawer-container>
          
          <button mat-raised-button color="warn" (click)="drawer.toggle()" >Toggle drawer</button>
        `,
        language:'html',
        type:'code',
      }
    }
  },
};
