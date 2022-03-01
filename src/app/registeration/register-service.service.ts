import { Injectable } from '@angular/core';
// tslint:disable-next-line: import-spacing
import{HttpClient, HttpClientModule, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/';
import {iuser} from '../admin/userlist/iusers';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  //='http://15.206.187.62:3000/api/AddUsers';
  adduserurl = 'http://localhost:3000/api/AddUsers';

  constructor(private http: HttpClient) { }

  createuser( iuser ): Observable<iuser> {
    const httpheader = new HttpHeaders()
    .set('Content-Type', 'application/Json');
    let options = {
      headers: httpheader
    };
    return  this.http.post<iuser>(this.adduserurl, iuser, options);
  }
}
