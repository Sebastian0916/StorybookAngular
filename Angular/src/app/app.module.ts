import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StandardDirective } from 'src/standard/standard.directive';
import { MatButtonModule } from '@angular/material/button';
import { DrawerComponent } from 'src/components/drawer/drawer.component';
import { AngularModule } from '@sinco/angular';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [
    AppComponent,
    StandardDirective,
    DrawerComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularModule,
    MatChipsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
