import { Component, Input } from '@angular/core';
import { ChipModel, ChipsModel } from '../model/sinco-angular.model';

@Component({
  selector: 'app-chip',
  styleUrls: ['./chip.component.scss'],
  templateUrl: './chip.component.html',
})
export class ChipComponent {
  @Input() arrayChips!: ChipsModel;
  @Input() selected = false;
  @Input() cancel = false;
  @Input() variante!: string;
  @Input() size = 'medium';
  color = 'primary';
  icono!: string;

  get mostrarIcono(): boolean {
    return !!this.icono;
  }

  chipClick(chip: ChipModel) {
    if (chip.eventoClick) {
      chip.eventoClick(chip.valor);
    }
  }
}
