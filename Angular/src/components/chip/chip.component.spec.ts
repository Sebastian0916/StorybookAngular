import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatChipsModule } from '@angular/material/chips';

import { AngularModule, ChipsModel } from '@sinco/angular';
import { ChipComponent } from './chip.component';

describe('ChipComponent', () => {
  let component: ChipComponent;
  let fixture: ComponentFixture<ChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatChipsModule, AngularModule],
      declarations: [ChipComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el elemento con atributo name ="icono" cuando el input diasDisponiblesVacaciones sea mayor a 0', () => {
    component.arrayChips = [
      {
        texto: 'Pendiente',
        icono: 'icono',
      },
    ] as ChipsModel;
    fixture.detectChanges();
    const control = fixture.debugElement.query(By.css('[name="icono"]'));
    expect(control).toBeTruthy();
  });

  it('debe mostrar el elemento con atributo name ="icono" cuando el input diasDisponiblesVacaciones sea mayor a 0', () => {
    component.arrayChips = [
      {
        texto: 'Pendiente',
      },
    ] as ChipsModel;
    fixture.detectChanges();
    const control = fixture.debugElement.query(By.css('[name="icono"]'));
    expect(control).toBeFalsy();
  });
});
