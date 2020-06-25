import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './url';

@Injectable({
  providedIn: 'root',
})
export class DniService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  getCuit(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'cuit/' + id, { headers: headers });
  }
  getUser(cuit): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.get(this.url + 'user/' + cuit, { headers: headers });
  }
}
