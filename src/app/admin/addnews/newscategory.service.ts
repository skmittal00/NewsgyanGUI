import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';
import { iNewsCategories } from '../Model/iNewsCategories';

@Injectable({
  providedIn: 'root'
})

export class NewscategoryService {
  newsCategoryurl = 'http://15.206.187.62:3000/api/NCDetail';
  
  constructor(private addnewshttp: HttpClient) { }

  //Fetching detail of NewsCategories.
  getNewsCategoryDetail(): Observable<iNewsCategories[]> {
    return this.addnewshttp.get<iNewsCategories[]>(this.newsCategoryurl);
  }
}