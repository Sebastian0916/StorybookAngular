import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA, _MatSnackBarContainerBase } from '@angular/material/snack-bar';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { AngularModule } from '@sinco/angular';
import { ToastNotificationComponent } from './toast-notification.component';

import {MatSnackBarHarness} from '@angular/material/snack-bar/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';


describe('ToastNotificationComponent', () => {
  let component: ToastNotificationComponent;
  let fixture: ComponentFixture<ToastNotificationComponent>;
  let matSnackbarRefMock:Partial<MatSnackBarRef<ToastNotificationComponent>>;

  beforeEach(() => {
    matSnackbarRefMock = {
      afterOpened:jest.fn().mockReturnValue(of (true)),
      dismiss:jest.fn().mockReturnValue(of ()), 
    }
    TestBed.configureTestingModule({
      imports:[AngularModule],
      declarations: [ToastNotificationComponent],
      providers:[
        {
          provide:MAT_SNACK_BAR_DATA,
          useValue: {},
        },
        {
          provide:MatSnackBarRef,
          useValue:matSnackbarRefMock
        }
      ],
    });
    fixture = TestBed.createComponent(ToastNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe el metodo "obtainDurationTime" obetener el valor de la duracion total de tiempo',()=>{
    const mockDuration = 5000;
    matSnackbarRefMock.containerInstance = <_MatSnackBarContainerBase>{
      snackBarConfig: {
        duration: mockDuration,
      },
    };
    const spyOnReduceValueProgresBar = jest.spyOn(component, 'reduceValueProgresBar');
    component.obtainDurationTime();
    expect(spyOnReduceValueProgresBar).toHaveBeenCalledWith(mockDuration);
  });

  it('Debe ejecutarse el metodo "reduceValueProgresBar" cuando se inicialize el componente',()=>{
    jest.spyOn(component,'reduceValueProgresBar')
    component.reduceValueProgresBar(5000);
    fixture.detectChanges();
    expect(component.reduceValueProgresBar).toHaveBeenCalled()
  });

  it('Debe la variable "subscription" suscribirse al observable de rxjs "timer" al momento de llamar al metodo "reduceValueProgresBar"',()=>{
    const duration = 5000
    component.reduceValueProgresBar(duration)
    expect(component.subscription).toBeDefined()
  });

  it('Debe la variable "progressBarValue" actualizarse gradualmente a medida que se ejecuta el metodo "reduceValueProgresBar" y ser igual a cero una ves se llame el metodo "ngOnDestroy"', fakeAsync(()=>{
    const mockDuration = 10000;
    component.reduceValueProgresBar(mockDuration);
    fixture.detectChanges();
    const intervals = [
      { duration: 1000, expectedValue: 90 },
      { duration: 4000, expectedValue: 50 },
      { duration: 3000, expectedValue: 20 },
      { duration: 2000, expectedValue: 0 },
    ];
    for (const interval of intervals) {
      tick(interval.duration);
      expect(component.progressBarValue).toBe(interval.expectedValue);
    }
    component.ngOnDestroy();
    expect(component.progressBarValue).toBe(0);
  }));
  
  it('Debe la variable "subscription" cancelar la suscripcion al momento de que el componente ejecute el metodo "ngOnDestroy"',()=>{
    component.reduceValueProgresBar(5000);
    fixture.detectChanges();
    const spyOnSubscription = jest.spyOn(component.subscription,'unsubscribe');
    component.ngOnDestroy();
    expect(spyOnSubscription).toHaveBeenCalled()
  });

  it('Debe llamar el metodo "dismiss" de la clase "MatSnackBarRef" cuando se haga click en el boton de cierre y se active el metodo "closeSnackbar"',fakeAsync(()=>{
    fixture.detectChanges();
    const closeButton = fixture.debugElement.query(By.css('button[mat-icon-button]'));
    closeButton.nativeElement.click();
    tick();
    component.closeSnackbar();
    expect(matSnackbarRefMock.dismiss).toHaveBeenCalled()
  }));
  
  it('Debe mostrar el contenido de la propiedad "data.title" y la propiedad "data.description" de manera correcta adentro de etiquetas de parrafo ',()=>{
    const testTitle = 'titulo del componente';
    const testDescription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi unde expedita ducimus saepe.'; 
    component.data = {
        title:testTitle,
        description:testDescription,
        type:'success'
    };
    fixture.detectChanges();
    const titleElement = fixture.debugElement.query(By.css('.column .mat-subtitle-1'));
    const descriptionElement = fixture.debugElement.query(By.css('.mat-body-2'));
    expect(titleElement.nativeElement.textContent).toContain(testTitle)
    expect(descriptionElement.nativeElement.textContent).toContain(testDescription)
  });


});
