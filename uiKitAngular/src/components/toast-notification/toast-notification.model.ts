import { TemplateRef } from '@angular/core';
import { TypeAlerts } from '@sinco/angular';

export enum DefaultTitltes {
  success = '¡Listo!',
  info = '¡Aviso importante!',
  warning = '¡Cuidado con esto!',
  error = '¡Algo salió mal!'
}

export interface ToastNotificationData {
  type: TypeAlerts,
  title?: string,
  description?: string,
  aditionalContent?: TemplateRef<any>,
}

