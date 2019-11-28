import { Component } from '@angular/core';
import { signalRService } from './signalR.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'SubscriberApp';
  private readonly _signalRService: signalRService;
  message: string;
  constructor(signalRService: signalRService) {
    this._signalRService = signalRService;
  }

  ngOnInit() {
    this._signalRService.init();
    this._signalRService.messages.subscribe(message => {
this.message=message;
    });
  }

}
