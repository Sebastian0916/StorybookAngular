import { moduleMetadata, Meta, StoryObj } from "@storybook/angular";
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { TypeAlerts } from "@sinco/angular";
import { ToastNotificationService } from "src/components/toast-notification/toast-notification.service";
import { ToastNotificationData } from "src/components/toast-notification/toast-notification.model";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ToastNotificationComponent } from "src/components/toast-notification/toast-notification.component";

@Component({
  selector:'display-toast',
  template:`
    <ng-template #aditionalContent>
      <div class="column gap-2 pt-2">
        <ul class="pl-6 color-text-primary">
            <li *ngFor="let item of listItems | slice:0:(show ? undefiend : 3)">{{item}}</li>
        </ul>
        <div class="row justify-content-end gap-1">
        
          <button mat-stroked-button [color]="this.type == 'error'?'warn':this.type" (click)="alertMessage()" >desplegar</button>
          <button mat-flat-button [color]="this.type == 'error'?'warn':this.type" (click)="show = !show">
            {{show == true?'ocultar  ':'mostrar'}}
            <mat-icon iconPositionEnd>{{show == true?'arrow_upward':'arrow_downward'}}</mat-icon>
          </button>
        </div>
      </div>
    </ng-template>
  `
})

class componentLaunchToast{
  
  @Input()time!: number; 
  @Input()title!: string;
  @Input()description!: string;
  @Input()type!: TypeAlerts;
  @Input()content!:boolean 

  show!:boolean

  get showAditionalContent(){
    return this.content?this.aditionalContent:undefined;
  }

  @ViewChild('aditionalContent',{static:true}) aditionalContent!:TemplateRef<any>;

  listItems:string[]=[
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
    'item 8'
  ]

  constructor(private toast:ToastNotificationService){}
   
  ngOnInit(): void {
    let dataToast:ToastNotificationData={
      type:this.type,
      title:this.title,
      description:this.description,
      aditionalContent:this.showAditionalContent
    }
    this.toast.openToastNotificationComponent(this.time,dataToast);
  }

  alertMessage():void{
    alert('funcion personalizada e invocada con eventos')
  }

}

export default {
  title:'Angular Material/Toast-notification',
  component:componentLaunchToast,
  decorators:[
    moduleMetadata({
      declarations:[ToastNotificationComponent],
      imports:[
        MatSnackBarModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatProgressBarModule
      ],
      providers:[ToastNotificationService],
    })
  ],
  tags:['autodocs'],
  argTypes:{
    time:{
      description:' lapso de tiempo el cual va a permanecer en pantalla el componente `(formato en milisegundos)`.'
    },
    type:{
      options: ['error', 'info','success','warning'],
      control: {type:'select'},
      description:'estado que adoptara el componente y alterara su aspecto visual.'
    },
    title:{
      description:'titulo global del componente.'
    },
    description:{
      description:'descripcion corta de un mensaje.'
    },
    content:{
      name:'aditional content',
      description:'campo para referenciar a un elemento de tipo `TemplateRef` que se encuentre adentro de la seccion en donde se esta invocando el componete y tiene el contexto de todos los parametros o metodos que se usen en los elementos que alberga.'
    }

  }
} as Meta


type Story = StoryObj<componentLaunchToast>

export const Template:Story = {
  args:{
    time:20000,
    type:'error',
    title:'',
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda nobis officiis hic!',
    content:false
  },
  parameters:{
    docs:{
      source:{
        code:`

          import { Component, TemplateRef, ViewChild } from '@angular/core';
          import { ToastNotificationService } from '@sinco/angular';
          import { ToastNotificationData } from '@sinco/angular';
            
          @Component({
            selector: 'app-root',
            template:'
                <ng-template #aditionalContent>
                  <div class="column gap-1">
                    <ul class="pl-6 color-text-primary">
                        <li *ngFor="let item of listItems | slice:0:(show ? undefiend : 3)">{{item}}</li>
                    </ul>
                    <div class="row justify-content-end gap-1">
                      <button mat-stroked-button color="warn" (click)="alertMessage()" >
                        desplegar
                        <mat-icon >add</mat-icon>
                      </button>
                      <button mat-flat-button color="warn" (click)="show = !show">
                        {{show == true?'ocultar  ':'mostrar'}}
                        <mat-icon iconPositionEnd>{{show == true?'arrow_upward':'arrow_downward'}}</mat-icon>
                      </button>
                    </div>
                  </div>
                </ng-template>
            ',
            styleUrls: ['./app.component.scss']
          })

          export class AppComponent {

            @ViewChild('aditionalData',{static:true}) child!: TemplateRef<any>;

            show!:boolean

            listItems:string[]=[
              'item 1',
              'item 2',
              'item 3',
              'item 4',
              'item 5',
              'item 6',
              'item 7',
              'item 8'
            ]

            constructor(private toast: ToastNotificationService){}

            ngOnInit(): void {
              const toastData:ToastNotificationData ={
                title:'Titlte',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, mollitia',
                type:'info',
                aditionalContent:this.child
              }
              this.toast.openToastNotificationComponent(15000,toastData)
            }

            alertMessage():void{
              alert('funcion personalizada e invocada con eventos')
            }
          }
        `,
        language:'typescript',
        type:'code',

      }, 

    },
  }

}