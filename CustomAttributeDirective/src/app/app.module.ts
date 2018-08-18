import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RandomColorChangerDirective } from './random-color-changer.directive';

@NgModule({
  declarations: [
    AppComponent,
    RandomColorChangerDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
