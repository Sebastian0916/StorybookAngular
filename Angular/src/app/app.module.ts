import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularModule } from '@sinco/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { StandardDirective } from 'src/standard/standard.directive';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { RatingComponent } from 'src/components/rating/rating.component';
import { ChipComponent } from 'src/components/chip/chip.component';
import { AlertsInfoComponent } from 'src/components/alerts-info/alerts-info.component';
import { EmptyStateComponent } from 'src/components/empty-state/empty-state.component';
import { MatIconModule } from '@angular/material/icon';

const material = [MatCardModule, MatButtonModule, MatIconModule];

const componentesPropios = [
  DrawerComponent,
  RatingComponent,
  ChipComponent,
  AlertsInfoComponent,
  EmptyStateComponent,
];
@NgModule({
  declarations: [AppComponent, StandardDirective, componentesPropios],
  imports: [material, AngularModule, BrowserModule, BrowserAnimationsModule],
  exports: [material, componentesPropios],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
