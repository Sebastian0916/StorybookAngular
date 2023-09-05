import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Estados, UrlImagen } from '../model/sinco-angular.model';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss'],
})
export class EmptyStateComponent {
  @Input() titulo!: string;
  @Input() contenido!: string;
  @Input() estado: Estados = 'create';

  @ContentChild('acciones', { static: true })
  acciones!: TemplateRef<HTMLButtonElement>;

  get retornarImagen() {
    return UrlImagen[this.estado];
  }

  get validarBotones() {
    return this.estado === 'create';
  }
}
