import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuidedTourModule } from 'ngx-guided-tour';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GuidedTourModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
