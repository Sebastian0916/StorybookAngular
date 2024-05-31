import { TestBed } from '@angular/core/testing';

import { ToastNotificationService } from './toast-notification.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ToastNotificationData } from './toast-notification.model';

describe('ToastNotificationService', () => {
  let service: ToastNotificationService;
  let snackbar:MatSnackBar

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[
        {
          provide:MatSnackBarRef,
          useValue:{},
        },
        {
          provide:MatSnackBar,
          useValue:{
            openFromComponent:()=>{
              return {
                duration:12000,
                data:{
                  title:'hola',
                  description:'descripcion',
                  type:'success'
                }
              }
            }
          }
        }
      ]
    });
    service = TestBed.inject(ToastNotificationService);
    snackbar = TestBed.inject(MatSnackBar)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe llamarse el metodo "openFromComponent" de "snackbar" al momento de ejecutarse el metodo "openToastNotificationComponent"',()=>{
    const time: number = 13000
    const dataToast:ToastNotificationData = {
      title:'Cuidado con eso',
      description:'[Descripción breve de la advertencia]',
      type:'success',
    }
    const spyOpenFromComponent = jest.spyOn(snackbar,'openFromComponent');
    service.openToastNotificationComponent(time,dataToast)
    expect(spyOpenFromComponent).toHaveBeenCalled()
  })
  
});
