import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsInfoComponent } from './alerts-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('AlertsInfoComponent', () => {
  let component: AlertsInfoComponent;
  let fixture: ComponentFixture<AlertsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertsInfoComponent],
      imports: [MatCardModule, MatIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
