import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { iNewsAdd } from '../Model/iNewAdd';
import { iplace } from '../Model/iplace';
import { AddnewsServiceService } from 'src/app/Services/addnews-service.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';



@Component({
  selector: 'app-adeditor',
  templateUrl: './adeditor.component.html',

  encapsulation: ViewEncapsulation.None,
  styles: [`
  .dark-modal .modal-content {
    background-color: #292b2c;
    color: white;
  }
  .dark-modal .close {
    color: white;
  }
  .light-blue-backdrop {
    background-color: #5cb3fd;
  }
`]
})
export class AdeditorComponent implements OnInit {
  Editorfrmgrp: FormGroup;

  _cap: String; _Ref: String; _news: String; nid: string;
  _nsDetail: iNewsAdd[]; _place: iplace[]; closeResult: string; result: any[] = []; tempdt: iNewsAdd;
  constructor(private nsDt: AddnewsServiceService, private modalService: NgbModal, private frmbuilder: FormBuilder) {

    this.Editorfrmgrp = frmbuilder.group({
      _id: ['', Validators.required],
      ActiveName: ['', Validators.required],
      NPlaceRef: ['', Validators.required]
    });

  }

  ngOnInit() {
    this.GetNewsDetail();
    this.setPlace();
  }

  frmvalue: FormControl = new FormControl();


  openScrollableContent(longContent, Id) {
    this.nid = Id;
    // tslint:disable-next-line: no-debugger
    debugger;
    this.modalService.open(longContent, { scrollable: true });
    this.getValue(Id);
  }

  GetNewsDetail() {
    this.nsDt.News_Detail().subscribe(newsdetail => this._nsDetail = newsdetail);
  }
  getValue(Id: string) {
    this.nsDt.getNewsById(Id).subscribe((selectedNews) => {
      // tslint:disable-next-line: prefer-const
      let _newsId = selectedNews;
      for (let i = 0; i < _newsId.length; i++) {
        this._cap = _newsId[i].Caption;
        this._Ref = _newsId[i].NewsUID;
        this._news = _newsId[i].News;
        this.result.push(_newsId[i]);
        console.log(this.result);
      }
    });
  }

  updateNews1(Editorfrmgrp: any) {
    const _id = this.nid;
    this.Editorfrmgrp.patchValue({'_id':_id});
    let Isactive = this.Editorfrmgrp.get('ActiveName').valueChanges;
    let place = this.Editorfrmgrp.get('NPlaceRef').valueChanges;
    const allEditoformvalues = this.Editorfrmgrp.value;
    //console.log(allEditoformvalues);
    this.newsupdate(allEditoformvalues);
    this.Editorfrmgrp.reset();
    //this.modalService.close();

  }
  get f() { return this.Editorfrmgrp.controls; }
  newsupdate(newsdt: iNewsAdd) {
    this.nsDt.update_news(newsdt).subscribe();

  }
 // updateNews(updateID: String, NewsPlace: String, Ispublished: any) {
   // debugger;
   // this.nsDt.updatenewsbyId(this.nid, this.newsRefPlace, this.Isnpublished).subscribe();
  //}

  Active = [{ "ActiveName": true, value: 1 }, { "ActiveName": false, value: 0 }];
  setPlace() {
    debugger;
    this.nsDt.GetPlace().subscribe(places => this._place = places)
  }
  newsRefPlace: any; Isnpublished: any;
  Isactive(item1: any) {
    this.Isnpublished = item1;

  }
  selectnewsitems(item2: any) {
    this.newsRefPlace = item2;
  }
}

