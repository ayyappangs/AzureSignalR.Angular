import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { signalRService } from './signalR.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],

providers: [
  signalRService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
