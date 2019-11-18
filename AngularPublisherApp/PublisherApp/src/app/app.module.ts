import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignalrService } from './SignalR.service';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule
  ],
  providers: [SignalrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
