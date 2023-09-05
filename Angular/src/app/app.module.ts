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

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PageHeaderComponent } from 'src/components/page-header/page-header.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';


const componentes = [
  DrawerComponent,
  RatingComponent,
  AlertsInfoComponent,
  ChipComponent,
  PageHeaderComponent
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
  MatCheckboxModule,
  MatRadioModule
]

const directivas = [
  StandardDirective
]

@NgModule({
  declarations: [
    AppComponent,
    componentes,
    directivas
  ],
  imports: [material, AngularModule],
  exports: [material, componentes, directivas,AngularModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
