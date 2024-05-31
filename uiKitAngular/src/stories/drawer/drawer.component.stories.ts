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
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AlertsInfoComponent } from 'src/components/alerts-info/alerts-info.component';

@Component({
  selector: 'app-drawer-container',
  template:`
  <div style="height: 95vh;" class="row align-items-center justify-content-center">
    <mat-drawer-container>
      <mat-drawer #drawer mode="over">
        <app-drawer [width]="width" [actions]="actions" [actionsAlignStart]="actionsAlignStart" [drawerAlignStart]="drawerAlignStart">
          <ng-template #drawerHeader>
            <span class="mat-h4"> Formularion de inscripcion</span>
            <button mat-icon-button size="small" (click)="drawer.close()" >
              <mat-icon size="small">close</mat-icon>
            </button>
          </ng-template>
          <ng-template #drawerContent>
            <div class="px-3">
              <div class="column gap-3">
                  <span class="mat-h4">Datos personales</span>
                  <div class="row gap-2">
                  <div class="row gap-1 col-12 px-0">
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Nombre</mat-label>
                      <input matInput value="Juan Daniel" required />
                    </mat-form-field>
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Apellido</mat-label>
                      <input matInput value="Lopez Espinoza" required />
                    </mat-form-field>
                  </div>
                  <div class="row gap-1 col-12 px-0">
                      <mat-form-field appearance="outline" size="small" class="col px-0">
                        <mat-label>Documento</mat-label>
                        <input matInput value="102300048955" type="number" required />
                      </mat-form-field>
                      <mat-form-field appearance="outline" class="col px-0">
                        <mat-label>Tipo</mat-label>
                        <mat-select value="Cedula-ciudadana">
                          <mat-option value="Cedula-ciudadana">C.C</mat-option>
                          <mat-option value="Cedula-extranjera">C.E</mat-option>
                          <mat-option value="Cedula-digital">C.C DIG</mat-option>
                        </mat-select>
                      </mat-form-field>
                      <mat-form-field appearance="outline" size="small" class="col px-0">
                        <mat-label>Fecha de expedicion</mat-label>
                        <input matInput [matDatepicker]="picker" [value]="date.value">
                        <mat-datepicker-toggle matIconSuffix [for]="picker"></mat-datepicker-toggle>
                        <mat-datepicker #picker></mat-datepicker>
                      </mat-form-field>
                  </div>
                  <div class="row gap-1 col-12 px-0">
                    <mat-form-field appearance="outline" size="small" class="col px-0">
                        <mat-label>Edad</mat-label>
                        <input matInput value="102300048955" value="26" type="number" min="0" max="100" required />
                    </mat-form-field>
                    <mat-form-field appearance="outline" size="small" class="col px-0">
                        <mat-label>Fecha de nacimiento</mat-label>
                        <input matInput [matDatepicker]="picker_1" [value]="date.value">
                        <mat-datepicker-toggle matIconSuffix [for]="picker_1"></mat-datepicker-toggle>
                        <mat-datepicker #picker_1></mat-datepicker>
                      </mat-form-field>
                  </div>
                  <mat-form-field appearance="outline" class="col-12 px-0">
                        <mat-label>Genero</mat-label>
                        <mat-select value="Cedula-ciudadana" value="Masculino" required>
                          <mat-option value="Masculino">masculino</mat-option>
                          <mat-option value="Femenino">femenino</mat-option>
                        </mat-select>
                  </mat-form-field>
                  <mat-form-field appearance="outline" class="col px-0">
                        <mat-label>Estado civil</mat-label>
                        <mat-select value="soltero" required>
                          <mat-option value="soltero">soltero/a</mat-option>
                          <mat-option value="casado">casado/a</mat-option>
                          <mat-option value="separado">separado/a</mat-option>
                          <mat-option value="divorciado">divorciado/a</mat-option>
                          <mat-option value="viudo">viduo/a</mat-option>
                        </mat-select>
                  </mat-form-field>
                  <div class="row gap-1 col-12 px-0">
                    <mat-form-field appearance="outline" size="small" class="col px-0">
                        <mat-label>Telefono</mat-label>
                        <input matInput value="3574896907"  type="number" min="6" max="12" required />
                    </mat-form-field>
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Correo electronico</mat-label>
                      <input matInput value="LopEsp@gmail.com" type="email" required />
                    </mat-form-field>  
                  </div>
                  <div class="row gap-1 col-12 px-0">
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Nacionalidad</mat-label>
                      <input matInput value="Colombiana" required />
                    </mat-form-field>
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Lugar de recidencia</mat-label>
                      <input matInput value="Bogota D.c" required />
                    </mat-form-field>
                    <mat-form-field size="small" appearance="outline" class="col px-0">
                      <mat-label>Dieccion</mat-label>
                      <input matInput value="calle 97-Est-n°12-56" required />
                    </mat-form-field>
                  </div>
                  <app-alerts-info
                    class="col-12 px-0"
                    [title]="'¡Aviso importante!'"
                    [type]="'info'"
                    [content]="'los datos suministrados dentro de este formulario seran almacenados dentro de una base de datos y se emplearan para brindar una mejor experiencia de usuario.'"
                    [mode]="'standard'"
                  />
                  </div>
              </div>
            </div>
          </ng-template>
          <ng-template #drawerActions>
            <button
              size="small"
              mat-raised-button
              color="primary"
              (click)="drawer.close()"
            >
              Cerrar
            </button>
            <button size="small" mat-raised-button color="primary">Guardar</button>
          </ng-template>
        </app-drawer>
      </mat-drawer>
    </mat-drawer-container>            
    <button mat-raised-button color="warn" (click)="drawer.toggle()" >Toggle</button>
  </div>  
  `
})
class ContainerComponent {
  @Input() width!: string;
  @Input() actions: boolean = false;
  @Input() actionsAlignStart: boolean = true;
  @Input() drawerAlignStart!: boolean;

  @ViewChild('drawer',{static:true})drawer!:MatDrawer;

  ngAfterViewInit(): void {
    this.drawer.open();
  }
  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

}

const meta: Meta<ContainerComponent> = {
  decorators: [
    moduleMetadata({
      declarations:[DrawerComponent,AlertsInfoComponent],
      imports: [
        MatButtonModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatRadioModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule 
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
    width:'40vw',
    actions: true,
    actionsAlignStart: false,
    drawerAlignStart: false,
  },
  argTypes: {
    width:{
      description:'propiedad para definir el ancho del componente',
    },
    actions: {
      options: [true, false],
      description:'Seccion que interactua con el contenido. Se despliega al hacer click en algun elemento dentro de la seccion de contenido.',
      defaultValue: { summary: false }

    },
    actionsAlignStart: {
      options: [true, false],
      description:'Posiciona el contenido de la acciones a la derecha.',
      defaultValue: { summary: true }

    },
    drawerAlignStart: {
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
          <app-drawer  width="520px" [actionsAlignStart]="true" [drawerAlignStart]="false" [actions]="true">
            <ng-template #drawerHeader>
              <h6> typography</h6>
              <button mat-icon-button size="small" (click)="drawer.close()">
                <mat-icon size="small">close</mat-icon>
              </button>
            </ng-template>
            <ng-template #drawerContent>
              <div class="row gap-3">
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Correo</mat-label>
                  <input matInput placeholder="pat@example.com" required /> 
                </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Contraseña</mat-label>
                  <input matInput placeholder="pat@example.com" required /> 
                </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Documento</mat-label>
                  <input matInput placeholder="pat@example.com" required /> 
                </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Fecha Expedicion</mat-label>
                  <input matInput placeholder="pat@example.com" required /> 
                </mat-form-field>
                <div class="column">
                  <label>Genero </label>
                  <mat-radio-group>
                    <mat-radio-button value="auto">Masculino</mat-radio-button>
                    <mat-radio-button value="always">Femenino</mat-radio-button>
                  </mat-radio-group>
                </div>
              </div>
              <div class="row gap-3">
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Correo</mat-label>
                  <input matInput placeholder="pat@example.com" required /> </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Contraseña</mat-label>
                  <input matInput placeholder="pat@example.com" required /> </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Documento</mat-label>
                  <input matInput placeholder="pat@example.com" required /> </mat-form-field>
                <mat-form-field size="small" appearance="outline">
                  <mat-label>Fecha Expedicion</mat-label>
                  <input matInput placeholder="pat@example.com" required /> </mat-form-field>
                <div class="column">
                  <label>Genero </label>
                  <mat-radio-group>
                    <mat-radio-button value="auto">Masculino</mat-radio-button>
                    <mat-radio-button value="always">Femenino</mat-radio-button>
                  </mat-radio-group>
                </div>
              </div>
            </ng-template>
            <ng-template #drawerActions>
              <button size="small" mat-raised-button color="primary" (click)="drawer.close()">
                Cerrar
              </button>
              <button size="small" mat-raised-button color="primary">Guardar</button>
            </ng-template>
          </app-drawer>
        </mat-drawer>
        <mat-drawer-content>
          <button size="small" mat-raised-button color="primary" (click)='drawer.open()'>Open drawer</button>
        </mat-drawer-content>
      </mat-drawer-container>
        `,
        language:'html',
        type:'code',
      }
    }
  },
};
