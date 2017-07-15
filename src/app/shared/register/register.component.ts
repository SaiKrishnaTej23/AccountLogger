import { Component, OnInit } from '@angular/core';
import { User } from '../entities/users';
import { UserService } from '../../utility/user.service';
import { Router } from '@angular/router';
import { ActionService } from '../../utility/action.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  User: User = new User();
    constructor(
        private user: UserService,
         private router: Router,
         private action: ActionService,
         private notify: NotificationsService) { }

    ngOnInit() {
        this.User.Id = 0;
        this.User.Name = '';
        this.User.Username = '';
        this.User.Password = '';
        this.User.HasAccess = false;
        this.User.PhotoUrl = '';
    }

    register() {
        if (this.User.Username !== '' && this.User.Password !== '' && this.User.HasAccess) {
            const users = new Array<number>();

        }        else {

           this.notify.error('Please complete the form!', 'Warning')
        }
    }
}
