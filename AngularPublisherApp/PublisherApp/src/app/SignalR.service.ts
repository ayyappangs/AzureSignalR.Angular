
import { Injectable } from "@angular/core";
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Subject } from "rxjs";

export class SignalRConnectionInfo {
  url: string;
  accessKey: string;
  userId: string;
  idToken: string;
}

@Injectable()
export class SignalrService {
  private hubConnection: HubConnection;
  messages: Subject<string> = new Subject();

  constructor() {

  }

   init() {
      this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://localhost:7071/api')
      .configureLogging(signalR.LogLevel.Information)
      .build();

  this.hubConnection.start().catch(err => console.error(err.toString()));

  this.hubConnection.on('sendmessage', (data: any) => {
      this.messages.next(data);
  });
  }

}
