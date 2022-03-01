import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { iuser } from '../userlist/iusers';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  p: number = 1;
  userlistdetail: iuser[];
  constructor(private userlist: UserService) { }

  ngOnInit() {
    this.getuserlist();

  }
  getuserlist() {
    this.userlist.getusers().subscribe(usrlist => this.userlistdetail = usrlist);
  }
}
