import { Component, Injectable } from '@angular/core';
import { Response, Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {

  constructor(
    private http: Http
  ) {

  }

  public getTorneos() {
    return this.http.get('https://indarts-7e45e.firebaseio.com/Spain/Madrid/M%C3%B3stoles.json').map((res:Response) => {
      return res.json();
    });
  }
}
