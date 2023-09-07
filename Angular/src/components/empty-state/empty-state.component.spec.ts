import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularModule } from '@sinco/angular';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent;
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularModule],
      declarations: [EmptyStateComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(EmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe el title reenderizar contenido cuando contenga un string', () => {
    component.titulo = 'Ejemplo prueba propiedad title';
    fixture.detectChanges();
    const contenido = fixture.nativeElement.querySelector('h6');
    expect(contenido).toBeTruthy();
  });

  it('debe retornaImagen retornar el URL de la imagen por el state "create"', () => {
    const urlEsperado = '../assets/images/create.svg';
    component.estado = 'create';

    const imagen = component.retornarImagen;

    expect(imagen).toEqual(urlEsperado);
  });
});
