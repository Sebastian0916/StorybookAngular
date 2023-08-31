import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input('titulo') titulo!: string;

  @ContentChild('nombreEmpresa', { static: true })
  nombreEmpresa!: TemplateRef<HTMLElement>;

  @ContentChild('drawerEncabezado', { static: true })
  drawerEncabezado!: TemplateRef<HTMLElement>;

  @ContentChild('drawerContenido', { static: true })
  drawerContenido!: TemplateRef<HTMLElement>;

  @ContentChild('drawerAcciones', { static: true })
  drawerAcciones!: TemplateRef<HTMLElement>;

  @Input() positionEnd!: boolean;
  @Input() alignEndAcciones!: boolean;
  @Input() acciones!:boolean;

  
  mostrarAcciones() {
    this.acciones = !this.acciones;
  }
  
  
  constructor(private drawerService: DrawerService) {}

}
