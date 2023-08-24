import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StandardDirective } from 'src/standard/standard.directive';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { SizeDirective } from '@sinco/angular';

@NgModule({
  declarations: [
    AppComponent,
    StandardDirective,
    SizeDirective
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    DrawerComponent,
    SizeDirective
  ],
  exports: [DrawerComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
