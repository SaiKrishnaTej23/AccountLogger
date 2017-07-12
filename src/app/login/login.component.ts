import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChildren } from '@angular/core';
import { UserService } from '../utility/user.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ActionService } from '../utility/action.service';
import { EventBusService } from '../utility/eventbus.service';
import { Constants } from '../utility/constants';
import { HttpClient } from '../shared/customhttp.service';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChildren(LoginComponent) el;
    email: string;
    password: string;

    constructor(
    private user: UserService,
    private router: Router,
    private notify: NotificationsService,
    private action: ActionService,
    private eventbus: EventBusService,
    private http: HttpClient
    ) { }

    ngOnInit() {
        console.log(this.el );
    }

    login() {
        this.user.login(this.email, this.password).subscribe((result) => {
      if (result) {
          this.router.navigateByUrl('/accounts');
          // this.eventbus.dispatch(new Event(Constants.LoggedInEvent));
          // this.notify.alert('Login Succesfull !', ' Happy browsing ...');
          this.user.getValues().subscribe((ree) => {console.log(ree) ; });
      }  else {
          // this.action.LogAction('Login failed', 1);
          this.router.navigateByUrl('/accounts');
      }
    });
    }
}
