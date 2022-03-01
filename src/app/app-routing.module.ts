import { NgModule, Component } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import{Routes} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import{AppComponent} from './app.component';
import{AddnewsComponent} from './admin/addnews/addnews.component';
import{RegisterationComponent} from './registeration/registeration.component';
import{AddnewsimagesComponent} from './admin/addnewsimages/addnewsimages.component';
import{HeaderComponent} from './uilayout/header/header.component';
import{UserlistComponent} from './admin/userlist/userlist.component';
import{LoginComponent} from './login/login.component';
import{ActiveGuard} from './active.guard';
import{DashboardComponent} from './dashboard/dashboard.component';
import{NewsdetailComponent} from './admin/newsdetail/newsdetail.component';
import{PplheaderComponent} from './publicview/headfoot/pplheader/pplheader.component';
import{PplfooterComponent} from './publicview/headfoot/pplfooter/pplfooter.component';
import{AdeditorComponent} from './admin/adeditor/adeditor.component';
import{PopupUpdateComponent} from './admin/popup-update/popup-update.component';




export const routes:Routes=[
 // {path:'Admin',loadChildren:'app/admin/admin.module#AdminModule'},
  
  {path:'addnews',component:AddnewsComponent},
  {path:'addImages',component:AddnewsimagesComponent,canActivate:[ActiveGuard]},
  //{path:'addImages',component:AddnewsimagesComponent},
  {path:'Register',component:RegisterationComponent},
  {path:'Head',component:HeaderComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'Login',component:LoginComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'NewsDetail',component:NewsdetailComponent},
  {path:'Pplheader',component:PplheaderComponent},
  {path:'Pplfooter',component:PplfooterComponent},
  {path:'Editor',component:AdeditorComponent},
  {path:'popup',component:PopupUpdateComponent},

  //{path:'Admin',loadChildren:'app/admin/admin.module#AdminModule'},

  

  {path:'',redirectTo:'/Login',pathMatch:'full'}
  
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }

