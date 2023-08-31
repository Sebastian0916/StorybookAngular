import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StandardDirective } from 'src/standard/standard.directive';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { AngularModule } from '@sinco/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

const material = [
  MatChipsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatRadioModule,
  MatInputModule
]

const componentes = [
  DrawerComponent
]
@NgModule({
  declarations: [
    AppComponent,
    StandardDirective,
    componentes
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularModule,
    material
  ],
  exports: [material, componentes],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
