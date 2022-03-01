import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';

import { iNewsCategories } from '../Model/iNewsCategories';
import { NewscategoryService } from './newscategory.service';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { AddnewsServiceService } from 'src/app/Services/addnews-service.service';
import { iNewsAdd } from '../Model/iNewAdd';
//import { tinymce} from '@tinymce/tinymce-angular';


//declare var $: any;



@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  formEditor: FormGroup;
  Adnews: string = "";
  Caption: string = "";



  public show: boolean = false;

  NCDetail: iNewsCategories[];
  NewsCategoryName: string;
  CreatedCaption: string;
  //selectedValue:string;
  newsdetail: Observable<iNewsCategories[]>;
  
  constructor(private NCService: NewscategoryService, private frmbuilder: FormBuilder, private addNewserv: AddnewsServiceService) {
    this.formEditor = frmbuilder.group({
      News: ['', Validators.required],
      Caption: ['', Validators.required],
      CategoryId: ['', Validators.nullValidator]

    });


  }
  getNCDetail() {
    this.NCService.getNewsCategoryDetail().subscribe(nclist => this.NCDetail = nclist)
  }
  selectedValue: FormControl = new FormControl()
  AddNews(formEditor: any) {

    debugger;
     //this.formEditor.get('Caption').value;
    // this.formEditor.get('Adnews').value;
     //this.formEditor.get('selectedVal').value;
    //this.formEditor.setValue({ "userid": '5bfeb4d8c8941e73908c9483' });
    this.NewsCategoryName;
    let allnewsform=this.formEditor.value;

    this.Addservicemethod(allnewsform);
    this.formEditor.reset();
    console.log(allnewsform);
  }
  Addservicemethod(news: iNewsAdd) {
    debugger;
    this.addNewserv.AddNews(news).subscribe();
  }

  get f() { return this.formEditor.controls; }

  ngOnInit() {
    this.getNCDetail();
  }
  showAddnewsPanel(Catvalue: any) {
    debugger;
    if (Catvalue === "0") {
      this.show = false;
    }
    else {
      this.NewsCategoryName = Catvalue;
      this.selectedValue;
      this.show = true;
    }

  }





}
