import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DobComponent } from './dob/dob.component';
import { DobDirectiveDirective } from './dob-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DigitsOnlyDirective } from './digits-only.directive';

@NgModule({
  declarations: [
    AppComponent,
    DobComponent,
    DobDirectiveDirective,
    DigitsOnlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
