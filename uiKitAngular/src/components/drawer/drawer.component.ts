import { Component, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})

export class DrawerComponent {

  @ContentChild('drawerHeader', { static: true })
  drawerHeader!: TemplateRef<HTMLElement>;

  @ContentChild('drawerContent', { static: true })
  drawerContent!: TemplateRef<HTMLElement>;

  @ContentChild('drawerActions', { static: true })
  drawerActions!: TemplateRef<HTMLElement>;

  @Input() width!: string;
  @Input() actions: boolean = false;
  @Input() actionsAlignStart: boolean = true;
  @Input() drawerAlignStart!: boolean;

  handlStateActions() {
    return this.actions = true;
  }

  get setStateActions() {
    return this.actions
      ? 'drawer-animation-actions__showActions'
      : 'drawer-animation-actions__hideActions';
  }

  get handleDrawerPosition() {
    return this.drawerAlignStart ? 'drawer-initial-position' : 'drawer-styles';
  }

}
