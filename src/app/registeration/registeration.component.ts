import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder,NgForm,Validators} from '@angular/forms';
import { iuser } from '../admin/userlist/iusers';
import{RegisterServiceService} from './register-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  sbForm:FormGroup;
  uname:string="";
  emailid:string="";
  mobile:string="";
  password:string="";

  allusers:Observable<iuser[]>;
  constructor(private frmbuilder:FormBuilder, private userReg:RegisterServiceService) {
    console.log("Registeration Component");
    this.sbForm=frmbuilder.group({
      Uname:['',Validators.required],
      uEmail:['',[Validators.required,Validators.email]],
      uMobile:['',Validators.required],
      uPassword:['',Validators.required],
      matchpassword:['',Validators.required]

    });
   }
   get f(){return this.sbForm.controls;}

  ngOnInit() {
   
  }
  SaveRgst(sbForm:any){
    debugger;
   // this.uname=this.sbForm.get('Uname').value;
   // console.log(this.uname);
     // console.log(sbForm.controls);
     // console.log(sbForm.value);
 let addusers=this.sbForm.value;
 
 this.createusers(addusers);
 this.sbForm.reset();
 console.log(addusers);
      //this.resetForm();
  }
  createusers(usr:iuser){
    this.userReg.createuser(usr).subscribe();    
  }
  resetForm(){
    this.sbForm.reset();
  }
  

}
