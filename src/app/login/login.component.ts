import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHandler, HttpHeaders } from '@angular/common/http';
import { observable } from 'rxjs';
import { iuser } from '../admin/userlist/iusers';
import { AuthService } from '../auth.service';
import { TranslationWidth } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginfrm: FormGroup;
  uEmail: string = "";
  uPassword: string = "";


  constructor(private frmbuilder: FormBuilder, private uslg: AuthService, private route: Router) {
    this.loginfrm = frmbuilder.group({
      uEmail: ['', Validators.required],
      uPassword: ['', Validators.required]
    })

  }
  get f() { return this.loginfrm.controls; }

  ngOnInit() {
  }

  usrlogin(loginfrm: any) {
    const uslog = this.loginfrm.value;
    this.EnterLogin(uslog);
    this.loginfrm.reset();
  }
  EnterLogin(usrlog: iuser) {
    // tslint:disable-next-line: no-debugger
    debugger;

    this.uslg.login(usrlog.uEmail, usrlog.uPassword).subscribe(data => {data;
        this.route.navigate(['Dashboard']);
    },(err)=>{alert(err.statusText)});
  };
  resetForm() {
    this.loginfrm.reset();
  }
}
