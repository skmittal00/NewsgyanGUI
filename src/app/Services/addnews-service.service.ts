import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { iNewsAdd } from '../admin/Model/iNewAdd';
import { iplace } from '../admin/Model/iplace';

@Injectable({
  providedIn: 'root'
})

export class AddnewsServiceService {
  addnewsurl = 'http://localhost:3000/api/Addnews';
  newsdetail = 'http://localhost:3000/api/getnewsdetail';
  //newsdetail='http://localhost:3000/api/GetAllNews';
  getbyId = 'http://localhost:3000/api/getnewsbyId/';

  // http://localhost:3000/api/getnewsdetail

  newsurl = 'http://localhost:3000/api/';

  constructor(private http: HttpClient) { }

  AddNews(iNewAdd): Observable<iNewsAdd> {
    const httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    const options = {
      headers: httpheader
    };
    return this.http.post<iNewsAdd>(this.addnewsurl, iNewAdd, options);
  }

  News_Detail(): Observable<iNewsAdd[]> {
    return this.http.get<iNewsAdd[]>(this.newsdetail);
  }
  GetPlace(): Observable<iplace[]> {
    return this.http.get<iplace[]>(this.newsurl + 'GetPlaces');
  }
  getNewsById(nid: string): Observable<iNewsAdd[]> {
    // tslint:disable-next-line: no-debugger
    debugger;
    return this.http.get<iNewsAdd[]>(this.getbyId + nid);
  }


  update_news(newsupdate: iNewsAdd): Observable<number> {
    // tslint:disable-next-line: no-debugger
    debugger;
    const httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    let options = {
      headers: httpheader
    };
    return this.http.put<number>(this.newsurl + 'newsUpdate/', newsupdate);
  }


  updatenewsbyId(NId: String, NewsPlace: String, Ispublished: any): Observable<iNewsAdd[]> {
    // tslint:disable-next-line: no-debugger
    debugger;
    const httpheader = new HttpHeaders()
      .set('Content-Type', 'application/Json');
    let options = {
      headers: httpheader
    };
    return this.http.put<iNewsAdd[]>(this.newsurl + 'newsUpdate/' + NId + '/' + NewsPlace + '/' + Ispublished, options);
  }
}
