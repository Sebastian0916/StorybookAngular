import { Component, Input } from '@angular/core';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'mat-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
})

export class RatingComponent {
  @Input() value!: number;
  @Input() max: number = 5;
  @Input() precision: number = 1;
  @Input() get disabled() {
    return this._disabled;
  }
  private _disabled = false;

  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }

  get render(): Array<number> {
    return Array.from({ length: this.max }, (valor, index) => index + 1);
  }

  get calcPrecision(): number {
    const tamaño:number = Math.round(this.value / this.precision) * this.precision;
    const tamañoIgualElementoActual:boolean = Math.trunc(this.value) == tamaño;
    const tamañoMayorElementoActual:boolean = tamaño >= Math.trunc(this.value) + 1;
    return tamañoIgualElementoActual
      ? 0
      : tamañoMayorElementoActual
      ? 100
      : (tamaño % 1) * 100;
  }

  get formatoAnchoIcono(): string {
    return `${this.calcPrecision}% !important`;
  }

  asignarContenido(item: number): string {
    return item <= this.value ? 'star' : 'star_outline';
  }

  mostrarElemento(item: number): boolean {
    return this.value < item && this.value > item - 1;
  }
}
