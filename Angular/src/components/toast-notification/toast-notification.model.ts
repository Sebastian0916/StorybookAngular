import { TemplateRef } from '@angular/core';
import { TypeAlerts } from '@sinco/angular';

export interface ToastNotificationData {
  type:TypeAlerts,
  title:string,
  description?:string,
  aditionalContent?:TemplateRef<any>,
}

