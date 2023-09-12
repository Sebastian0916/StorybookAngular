import { Component, Input, ContentChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})

export class DrawerComponent  {
  @Input('titulo') titulo!: string;

  @ContentChild('nombreEmpresa', { static: true })
  nombreEmpresa!: TemplateRef<HTMLElement>;

  @ContentChild('drawerEncabezado', { static: true })
  drawerEncabezado!: TemplateRef<HTMLElement>;

  @ContentChild('drawerContenido', { static: true })
  drawerContenido!: TemplateRef<HTMLElement>;

  @ContentChild('drawerAcciones', { static: true })
  drawerAcciones!: TemplateRef<HTMLElement>;

  @Input() alignEnd: boolean = true;
  @Input() acciones: boolean = false;
  @Input() positionEnd!: boolean;

  mostrarAcciones() {
    this.acciones = true;
  }

  get estadoAcciones() {
    return this.acciones
      ? 'animaciones__mostrarAcciones'
      : 'animaciones__ocultarAcciones';
  }

  get posicionamientoDrawer() {
    return this.positionEnd ? 'drawer-end' : 'drawer';
  }
}