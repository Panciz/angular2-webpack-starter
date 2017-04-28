import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class Title {

  public value = 'Angular 2';

  constructor(
    public http: Http
  ) {}

  public getData() {
    console.log('Title#getData(): Get Data');
    return this.http.get('http://localhost:8080/PMS-Packaging/api/packaging/test');
    // .map(res => res.json());
    // return {
    //  value: 'AngularClass'
    // };
  }

}
