import { moduleMetadata, Meta, StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FooterActionsComponent } from 'src/components/footer-actions/footer-actions.component';


@Component({
    selector: 'app-change-count',
    styles: [`
    .header-container-br{
      border-radius:8px 8px 0px 0px;
    }
    .border-radius{
      border-radius:8px;
    }
  `],
  template:`
    <div class="bg-light-default col-12 row justify-content-center align-items-center " style="height: 95vh; padding-inline:0px;">
        <div class="mat-elevation-z2 bg-white col-5 column border-radius" style="padding-inline:0px;">
            <div class="col-12 bg-primary color-white py-4 px-3 header-container-br">
                <span class="mat-h4">Formulario</span>
            </div>
            <form [formGroup]="form" class="column col-12 gap-2 p-6 align-items-end" >
                <div class="col-12 row justify-content-between gap-1 px-0">
                    <mat-form-field appearance="outline" class="col px-0" >
                        <mat-label>Nombre</mat-label>
                        <input matInput  autocomplete="off" name="nombre" placeholder="nombre" formControlName="nombre">
                    </mat-form-field>
                    <mat-form-field appearance="outline" class="col px-0" >
                        <mat-label>Apellido</mat-label>
                        <input matInput  autocomplete="off" name="apellido" placeholder="apellido" formControlName="apellido">
                    </mat-form-field> 
                </div>
                <div class="col-12 row justify-content-between gap-1 px-0">
                    <mat-form-field appearance="outline" class="col px-0" >
                        <mat-label>Documento</mat-label>
                        <input matInput type="number" autocomplete="off" name="documento" placeholder="documento" formControlName="documento">
                    </mat-form-field>
                    <mat-form-field class="col px-0" appearance="outline">
                        <mat-label>Tipo</mat-label>
                        <mat-select formControlName="tipo_documento">
                            <mat-option value="cedula">C.C</mat-option>
                            <mat-option value="targeta">T.I </mat-option>
                            <mat-option value="extrangera">C.E </mat-option>
                            <mat-option value="cédula_digital">CC DIG</mat-option>
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field class="col px-0" appearance="outline">
                        <mat-label>Estado</mat-label>
                        <mat-select formControlName="estado_civil" panelWidth="max-width">
                            <mat-option value="soltero">soltero/a</mat-option>
                            <mat-option value="casado">casado/a</mat-option>
                            <mat-option value="divorciado">divorciado/a</mat-option>
                            <mat-option value="viudo">viudo/a</mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <mat-form-field appearance="outline" class="col-12 px-0" >
                    <mat-label>Edad</mat-label>
                    <input matInput type="number" autocomplete="off" name="edad" placeholder="edad" formControlName="edad" min="0" max="100">
                </mat-form-field>
                <mat-form-field class="col-12 px-0" appearance="outline">
                    <mat-label>Sexo</mat-label>
                    <mat-select formControlName="sexo">
                        <mat-option value="masculino">masculino</mat-option>
                        <mat-option value="femenino">femenino</mat-option>
                    </mat-select>
                </mat-form-field>
            </form>
        </div>
    </div>

    <app-footer-actions *ngIf="showFooter">
        <ng-template #leftSection>
            <button mat-button color="primary" size="small">action</button>
        </ng-template>
        <ng-template #rightSection>
            <span class="mat-body-2 color-text-secondary">Cambiaste <b>{{count}}</b> campo(s) de informacion</span>
            <button mat-button color="primary" (click)="reset()">cancelar</button>
            <button mat-flat-button color="primary" type="submit" [disabled]="invalid">
              enviar  
              <mat-icon iconPositionEnd>send</mat-icon>
            </button>
        </ng-template>
    </app-footer-actions>
  `
})

class ChangeCountComponent {

    form!: FormGroup;
    count: number = 0;
    private static originalValues: object;
  
    get showFooter(): boolean {
      return this.count > 0 ? true : false
    }
  
    get invalid():boolean{
      return this.form.invalid?true:false
    }
  
    private get originalValuesToArray(): Array<any> {
      return Object.values(ChangeCountComponent.originalValues)
    }
  
    constructor(private formBuilder: FormBuilder) {
      this.buildForm();
      this.form.valueChanges.subscribe((values) => {
        this.detectChanges(values);
      })
    }
  
    private buildForm(): void {
      this.form = this.formBuilder.group({
        nombre: ['judas',Validators.required],
        apellido: ['tadeo',Validators.required],
        edad: [57,Validators.required],
        sexo: ['masculino'],
        documento: [12506045234,Validators.required],
        tipo_documento: ['cedula'],
        estado_civil: ['soltero']
      });
      ChangeCountComponent.originalValues = this.form.value;
    }
  
    detectChanges(newValues: object): void {
      let newValuesToArray = Object.values(newValues)
      const changes = this.originalValuesToArray.filter(element => newValuesToArray.includes(element));
      this.counterChanges(this.originalValuesToArray.length, changes.length)
    }
  
    counterChanges(totalfields: number, totalChanges: number): void {
      this.count = (totalfields - totalChanges);
    }  

    reset(){
        this.form.setValue(ChangeCountComponent.originalValues)
    }  
    
}

const meta:Meta<ChangeCountComponent> =  {
    decorators:[
        moduleMetadata({
            declarations:[FooterActionsComponent],
            imports:[
                BrowserAnimationsModule,
                MatButtonModule,
                MatFormFieldModule,
                MatIconModule,
                MatInputModule,
                MatSelectModule,
                ReactiveFormsModule  
            ]
        }),
    ],
    title: 'Angular Material/Footer-actions',
    parameters:{
        docs:{
          story: {
            inline: false,
            iframeHeight: 500,
          },
          source:{
            code:`
            <app-footer-actions>
              <ng-template #leftSection>
                  <button mat-button color="primary" size="small">action</button>
              </ng-template>
              <ng-template #rightSection>
                  <span class="mat-body-2 color-text-secondary">Cambiaste <b>X</b> campo(s) de informacion</span>
                  <button mat-button color="primary">cancelar</button>
                  <button mat-flat-button color="primary" type="submit" >
                    enviar  
                    <mat-icon iconPositionEnd>send</mat-icon>
                  </button>
              </ng-template>
            </app-footer-actions>
            `,
            language:'html',
            type:'code',
          }
        }

      },
    component:ChangeCountComponent
}

export default meta;
type Story = StoryObj<ChangeCountComponent>;

export const form:Story = {
    name:'formulario',
}