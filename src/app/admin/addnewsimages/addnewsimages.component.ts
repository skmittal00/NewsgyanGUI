import { Component, OnInit, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { ImageServiceService } from '../addnewsimages/image-service.service';
import { InewsImages } from '../Model/iNewsImages';



const uri = 'http://localhost:3000/api/AddImages';

@Component({
  selector: 'app-addnewsimages',
  templateUrl: './addnewsimages.component.html',
  styleUrls: ['./addnewsimages.component.css']
})
export class AddnewsimagesComponent implements OnInit {
  public files: any[];
 
  constructor(private httpclient: HttpClient, private frombuiler: FormBuilder, private imgService: ImageServiceService,
    private el:ElementRef) { }
 
  OnchangeFile(event: any) {
    debugger;
    this.files = event.target.files;
  }
OnUpload(){
  let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#imgUploader');
  const userid:any='5bfeb4d8c8941e73908c9483';
  const ImgRef:any='img21319_1110sum';
  let FileCount:any =inputEl.files.length;
  console.log(FileCount);
  //let httpheader=new HttpHeaders()
  //.set('Content-Type','multipart/form-data'); 
 
  //let options={
  //  headers:httpheader 
  //};
  debugger;
  const fd=new FormData();
   fd.append('Filecount',FileCount);
   fd.append('EnterdBy',userid);
   fd.append('ImageRef',ImgRef);
  for(const file of this.files){   
    fd.append('imgUploader',file,file.name);   
  }
  this.httpclient.post(uri,fd).subscribe(res=>console.log(res));
}

  
  
  /*public imagePath: File = null;
  imgURL: any = '/assets/img/download.png';
  public message: string;

  preview(files) {
    debugger;

    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/ //)// == null) {
  // this.message = "Only images are supported.";
  // return;
  //}
  // var reader = new FileReader();
  // this.imagePath = files;
  // reader.readAsDataURL(files[0]);
  // reader.onload = (_event) => {
  //   this.imgURL = reader.result;
  //  }
  //}
 
  ngOnInit() { }


}







