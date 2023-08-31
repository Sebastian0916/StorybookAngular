import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';
import { AngularModule } from '@sinco/angular';
import { By } from '@angular/platform-browser';
import { TemplateRef } from '@angular/core';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderComponent],
      imports:[AngularModule]
    });
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
