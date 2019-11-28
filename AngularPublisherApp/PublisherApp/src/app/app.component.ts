import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { catchError, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable()
export class AppComponent implements OnInit  {
  title = 'PublisherApp';
  private readonly _http: HttpClient;
  private readonly _messageServie : MessageService;
  constructor(http: HttpClient, messageServie : MessageService) {
    this._http = http;
    this._messageServie = messageServie;
  }

  ngOnInit() {

  }

  showText(title:string) {

    this._messageServie.send(title).subscribe(() => {

    });
  }
}
