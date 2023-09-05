import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastNotificationComponent } from './toast-notification.component';
import { ToastNotificationData } from './toast-notification.model';

@Injectable({
  providedIn: 'root',
})

export class ToastNotificationService {
  constructor(private snackBar: MatSnackBar) {}
  openToastNotificationComponent(tiempo:number,data:ToastNotificationData) {
     this.snackBar.openFromComponent(ToastNotificationComponent, {
      duration:tiempo,
      data:data,
      horizontalPosition:'end',
      verticalPosition:'top',
      panelClass:[data.type]      
    });   
  }

}
