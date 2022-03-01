import { Injectable } from '@angular/core';
import{HttpClient, HttpClientModule, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/';
import{iuser} from '../userlist/iusers';

@Injectable()
export class UserService {
userUrl="http://localhost:3000/api/UserDetail";
  constructor(private usrhttp:HttpClient) {  }

  createuser(iuser):Observable<iuser>{
    let httpheader=new HttpHeaders()
    .set('Content-Type','application/Json');
    let options={
      headers:httpheader 
    };
    return  this.usrhttp.post<iuser>(this.userUrl,iuser,options);
  }
  getusers():Observable<iuser[]>{    
    return this.usrhttp.get<iuser[]>(this.userUrl);
  }
  IsActiveUser():boolean{
    return true;
  }
}
