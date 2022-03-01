import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InewsImages } from '../Model/iNewsImages';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload';


@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  AddImageUrl = 'http://localhost:3000/api/AddImages';

  constructor(private http: HttpClient) { }
 
}
