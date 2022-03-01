import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    debugger;
    return this.http.post<{ token: string }>('http://localhost:3000/api/auth', { uEmail: username, uPassword: password })
      .pipe(
        map(result => {
          if(result && result.token){
            localStorage.setItem('access_token', JSON.stringify(result.token));
          }
          //localStorage.setItem('access_token',result.token);
          const help = new JwtHelperService();
          const dcode = help.decodeToken(result.token);
          return true;
        })
      );
  }
  logout() {
    localStorage.removeItem('access_token');
  }

  IsActiveRight(): boolean {
    debugger;
    const IsAdmin = localStorage.getItem('access_token');
    const help = new JwtHelperService();
    const dcode = help.decodeToken(IsAdmin);
    if (dcode.Uname === 'Ganesha') {
      return true;
    } else {
      alert("You don't have Authorization to access this pages");
      return false;

    }


  }
}
