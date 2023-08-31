import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { RatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingComponent ],
      imports:[MatIconModule]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe añadir la clase "rating-container-disabled" al contenedor principal cuando el valor del decorador "disabled" no este definido al inicializar el componente',()=>{
    const containerStars =  fixture.debugElement.query(By.css('.rating-container'));
    component.value = 4;
    component.disabled = true;
    fixture.detectChanges();
    expect(containerStars.nativeElement.getAttribute('class')).toContain('rating-container-disabled') 
  })
  
  it('debe añadir la clase "star" cuando el valor del decorador "value" sea menor o igual al valor de la posicion del icono renderizado ',()=>{
    component.max = 5;
    component.value = 3;
    fixture.detectChanges();
    const star = fixture.debugElement.query(By.css('.stars-outer')); 
    expect(component.asignarContenido(3)).toContain('star');
    expect(star.nativeElement.getAttribute('class')).toContain('star')
  });

  it('debe añadir como contentido la cadena de texto "star" cuando el valor del decorador "value" sea menor o igual al valor de la posicion del icono renderizado',()=>{
    component.max = 5;
    component.value = 3;
    fixture.detectChanges();
    const star = fixture.debugElement.query(By.css('.stars-outer')); 
    expect(component.asignarContenido(3)).toContain('star');
    expect(star.nativeElement.getAttribute('fontIcon')).toContain('star')
  });

  it('debe mostrar el icono con la clase "stars-inner" cuando el valor del decorador "value" sea decimal, menor al valor de la posicion del icono renderizado y mayor al valor de la posicion anterior' ,()=>{
    component.max = 5;
    component.value = 2.5;
    fixture.detectChanges();
    const starDecimal = fixture.debugElement.query(By.css('.stars-inner'));
    expect(starDecimal).toBeTruthy();
    expect(component.mostrarElemento(3)).toBe(true);
  });

});