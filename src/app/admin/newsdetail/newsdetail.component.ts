import { Component, OnInit } from '@angular/core';
import { iNewsAdd } from '../Model/iNewAdd';
import { AddnewsServiceService } from 'src/app/Services/addnews-service.service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-newsdetail',
  templateUrl: './newsdetail.component.html',
  styleUrls: ['./newsdetail.component.css']
})
export class NewsdetailComponent implements OnInit {
  _newsdetail: iNewsAdd[];
  p: number = 1;


  _news: { news: string, newsid: number };

  constructor(private newsdt: AddnewsServiceService) { }

  ngOnInit() {
    this.GetNewsDetail();
  }
  GetNewsDetail() {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.newsdt.News_Detail().subscribe(newsdetail => this._newsdetail = newsdetail);
    //console.log(JSON.stringify(this._newsdetail));

    //console.log();
  }
 // _news: any[] = [];
  getnewsbyId(id: string) {
    // tslint:disable-next-line: no-debugger
    debugger;
    this.newsdt.getNewsById(id).subscribe((newsbyId: any) => {
      this._newsdetail = newsbyId;
    });
    console.log(this._newsdetail);
  }
}


