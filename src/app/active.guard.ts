import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import{UserService} from '../app/admin/userlist/user.service';
import{AuthService} from '../app/auth.service';
import {Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  constructor(private ActiveUserGuard:UserService ,private AuthSrvc:AuthService,private routes:Router){ 
  }
  canActivate(
    
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.ActiveUserGuard.IsActiveUser()){
       debugger;
        this.AuthSrvc.IsActiveRight();       
        const token=localStorage.getItem('access_token');       
        if(token === " "){
          alert("token as accessed");
          return true;            
        }else{
          
          this.routes.navigate(['Dashboard']);
          return false;
         }      
      }
      
      
  }
}
