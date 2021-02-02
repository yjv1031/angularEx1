import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirtstCompComponent } from './firtst-comp/firtst-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtstCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
