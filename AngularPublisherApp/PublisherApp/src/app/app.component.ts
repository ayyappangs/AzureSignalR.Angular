import { Component, OnInit } from '@angular/core';
import { SignalrService } from './SignalR.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit  {
  title = 'PublisherApp';
  private readonly _signalRService: SignalrService;
  message: string;
  SuccessText: string;
  imagePath: string;
  constructor(signalRService: SignalrService) {
    this._signalRService = signalRService;
  }

  ngOnInit() {
    this._signalRService.init();
    this._signalRService.messages.subscribe(message => {
      console.log("Image received");
      this.imagePath=message;
    });
  }
}
