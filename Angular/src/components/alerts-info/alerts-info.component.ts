import { Component, ContentChild, Input } from '@angular/core';
import { ModeAlert, TypeAlerts } from '../model/sinco-angular.model';

@Component({
  selector: 'app-alerts-info',
  templateUrl: './alerts-info.component.html',
  styleUrls: ['./alerts-info.component.scss'],
})
export class AlertsInfoComponent {
  @Input() title!: string;
  @Input() type: TypeAlerts = 'info';
  @Input() content!: string;
  @Input() close!: boolean;
  @Input() action!: string;
  @Input() mode: ModeAlert = 'standard';

  showAlert = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @ContentChild('contentTemplate', { static: true }) contentTemplate!: any;

  get estadosAlerta() {
    return `${this.type}  ${this.mode}`;
  }
  closeAlert() {
    this.showAlert = false;
  }
}
