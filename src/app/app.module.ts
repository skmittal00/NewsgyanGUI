import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule, routes } from './/app-routing.module';
import{AddnewsComponent} from './admin/addnews/addnews.component';
import{AddnewsimagesComponent} from './admin/addnewsimages/addnewsimages.component';
//import{UilayoutModule} from './uilayout/uilayout.module';
import{LeftmenuComponent} from './uilayout/leftmenu/leftmenu.component';
import{HeaderComponent} from './uilayout/header/header.component';
import { RegisterationComponent } from './registeration/registeration.component';
import{ReactiveFormsModule} from '@angular/forms';
import{UserService} from './admin/userlist/user.service';
import{HttpClientModule} from '@angular/common/http';
import{UserlistComponent} from './admin/userlist/userlist.component';
import{RegisterServiceService} from './registeration/register-service.service';
import { LoginComponent } from './login/login.component';
import{AuthService} from './auth.service';
import { ActiveGuard } from './active.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import{NewscategoryService} from './admin/addnews/newscategory.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import{FileSelectDirective} from 'ng2-file-upload';
import{NewsdetailComponent} from './admin/newsdetail/newsdetail.component';
import{AddnewsServiceService} from 'src/app/Services/addnews-service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { PublicviewModule } from './publicview/publicview.module';
import{AdeditorComponent} from './admin/adeditor/adeditor.component';
import{PopupUpdateComponent} from './admin/popup-update/popup-update.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AddnewsComponent,
    AddnewsimagesComponent,
    LeftmenuComponent,
    HeaderComponent,    
    RegisterationComponent,    
    UserlistComponent, LoginComponent, DashboardComponent,NewsdetailComponent,AdeditorComponent,PopupUpdateComponent,
    FileSelectDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    //UilayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EditorModule,
    NgxPaginationModule,
    PublicviewModule,NgbModule
    
    
    
   


  ],
  providers: [UserService,RegisterServiceService,AuthService,ActiveGuard,NewscategoryService,AddnewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
