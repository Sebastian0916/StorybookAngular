import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StandardDirective } from 'src/standard/standard.directive';
import { AngularModule, SizeDirective } from '@sinco/angular';

import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { RatingComponent } from 'src/components/rating/rating.component';
import { ChipComponent } from 'src/components/chip/chip.component';
import { AlertsInfoComponent } from 'src/components/alerts-info/alerts-info.component';
import { PageHeaderComponent } from 'src/components/page-header/page-header.component';
import { ToastNotificationComponent } from 'src/components/toast-notification/toast-notification.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


const componentes = [
  DrawerComponent,
  RatingComponent,
  AlertsInfoComponent,
  ChipComponent,
  PageHeaderComponent,
  ToastNotificationComponent
];

const material = [
  BrowserModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatProgressBarModule
]

const directivas = [
  StandardDirective,
]

@NgModule({
  declarations: [
    AppComponent,
    componentes,
    directivas
  ],
  imports: [material, AngularModule],
  exports: [material, componentes, directivas,AngularModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
