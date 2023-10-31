import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { Estados, UrlImagen } from '../model/sinco-angular.model';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
})
export class EmptyStateComponent {
  @Input() titulo!: string;
  @Input() contenido!: string;
  @Input() estado: Estados = 'crear';
  @Input() alturaContenedor: string = '100%';
  @Input() anchoIlustracion: string = '210px';
  @Input() alturaIlustracion: string = '185px';

  @ContentChild('acciones', { static: true })
  acciones!: TemplateRef<HTMLButtonElement>;

  get retornarImagen() {
    return UrlImagen[this.estado];
  }
}
