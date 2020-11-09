import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DobComponent } from './dob/dob.component';
import { DobDirectiveDirective } from './dob-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DobComponent,
    DobDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
