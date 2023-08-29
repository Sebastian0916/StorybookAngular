import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StandardDirective } from 'src/standard/standard.directive';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { AngularModule } from '@sinco/angular';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

const material= [MatCardModule, MatButtonModule,MatChipsModule]

const componentesPropios = [
  DrawerComponent
]

@NgModule({
  declarations: [
    AppComponent,
    StandardDirective,
    componentesPropios
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularModule,
    material
  ],
  exports: [material,componentesPropios],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
