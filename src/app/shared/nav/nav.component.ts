import { Component, OnInit } from '@angular/core';
import { NavItem } from '../entities/navitem';
import { UserService } from '../../utility/user.service';
import { EventBusService } from '../../utility/eventbus.service';
import { Constants } from '../../utility/constants';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navItems: Array<NavItem>;
  isLoggedIn: boolean;
  userName: string;

constructor(private user: UserService, private eventbus: EventBusService) {
    this.eventbus.listen(Constants.LoggedInEvent).subscribe((e) => {this.getUserDetails()})
  }

  ngOnInit() {
     this.getUserDetails();
  }

  LogOut() {
    this.user.logout();
    this.isLoggedIn = false;
    this.eventbus.dispatch(new Event(Constants.LoggedInEvent));
  }

  getUserDetails() {
    const userDetail =  this.user.userDetails();
    this.isLoggedIn = userDetail.isLogged;
    this.userName = userDetail.userName;
  }
}

