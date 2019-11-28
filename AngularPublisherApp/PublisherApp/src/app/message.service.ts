
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subject } from "rxjs";

@Injectable()
export class MessageService {
  private readonly _http: HttpClient;
  constructor(http: HttpClient) {
    this._http = http;
}
    send(message: string): Observable<void> {
      console.log("Test");
        let requestUrl = `http://localhost:7071/api/message`;
        return this._http.post(requestUrl, message).pipe(map((result: any) => { }));
    }
}
