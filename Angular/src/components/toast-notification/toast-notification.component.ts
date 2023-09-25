import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { timer, Subscription } from 'rxjs';
import { DefaultTitltes, ToastNotificationData } from './toast-notification.model';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss'],
})
export class ToastNotificationComponent implements OnDestroy {

  progressBarValue: number = 100;
  subscription!: Subscription;

  get defineColor(): string {
    return this.data.type == "error" ? 'warn' : this.data.type
  }

  get defineDefaultTitle(): string {
    return !this.data.title ? this.data.title = DefaultTitltes[this.data.type]:this.data.title;   
  }

  constructor(
    private snackBarRef: MatSnackBarRef<ToastNotificationComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: ToastNotificationData,
  ) {
    this.obtainDurationTime()
    this.defineDefaultTitle;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  obtainDurationTime(): void {
    this.snackBarRef.afterOpened().subscribe(() => {
      const duration = this.snackBarRef.containerInstance.snackBarConfig.duration
      this.reduceValueProgresBar(duration)
    })
  }

  reduceValueProgresBar(duration?: number): void {
    const seconds = duration! / 100;
    this.subscription = timer(0, 100).subscribe((count) => {
      this.progressBarValue = 100 - count * 100 / seconds;
    });
  }

  closeSnackbar(): void {
    this.snackBarRef.dismiss()
  }

}

