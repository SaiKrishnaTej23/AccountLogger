import { Component, OnInit } from '@angular/core';
import { NavItem } from '../entities/navitem';
import { UserService } from '../../utility/user.service';
import { EventBusService } from '../../utility/eventbus.service';
import { Constants } from '../../utility/constants';
import { Router } from '@angular/router';
import { User } from '../entities/users';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems: Array<NavItem>;
  isLoggedIn: boolean;
  userName: string;
  UserDetail: User;

constructor(private user: UserService, private eventbus: EventBusService, private router: Router) {
    this.eventbus.listen(Constants.LoggedInEvent).subscribe((e) => {
      this.getUserDetails();
      this.getUserDetail();
    })
  }

  ngOnInit() {
     this.getUserDetails();
     this.getUserDetail();
  }

  LogOut() {
    this.user.logout().subscribe((res) => {
     this.isLoggedIn = false;
     this.eventbus.dispatch(new Event(Constants.LoggedInEvent));
     this.router.navigateByUrl('/login');
    });
  }

  getUserDetails() {
    const userDetail =  this.user.userDetails();
    this.isLoggedIn = userDetail.isLogged;
  }

  getUserDetail() {
    this.user.getUserDetails().subscribe((res) => {
        this.UserDetail = res.json() as User;
        this.userName = this.UserDetail.Name;
        console.log(this.UserDetail);
    });
  }

}

