import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }


  getSaludo(): Observable<String> {
    return of('hola');
  }

  getUsuario(): Observable<any> {
    return this.http.get('http://localhost:8080/usuario/4');
  }

}
