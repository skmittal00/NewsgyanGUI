import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddnewsComponent } from './addnews/addnews.component';
import { AddnewsimagesComponent } from './addnewsimages/addnewsimages.component';
import{UserService} from './userlist/user.service';
import{HttpClientModule} from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { ActiveGuard } from '../active.guard';
import { NewsdetailComponent } from './newsdetail/newsdetail.component';
import { AdeditorComponent } from './adeditor/adeditor.component';
import { PopupUpdateComponent } from './popup-update/popup-update.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
    
  ],
  declarations: [AddnewsComponent, AddnewsimagesComponent, UserlistComponent, NewsdetailComponent, AdeditorComponent, PopupUpdateComponent],
  providers:[UserService,ActiveGuard]
})
export class AdminModule { }
