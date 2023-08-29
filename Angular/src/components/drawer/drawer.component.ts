import { Component, Input, ContentChild, TemplateRef } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'sinco-drawer',
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

  @Input() position?: 'start' | 'end';
  @Input() mode!: MatDrawerMode;
  @Input() alignEnd: boolean = true;
  @Input() acciones: boolean = false;

  constructor(private drawerService: DrawerService) {}

  mostrarAcciones() {
    this.acciones = !this.acciones;
  }
}
