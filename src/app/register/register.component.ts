import { Component, OnInit } from '@angular/core';
import { User } from '../shared/entities/users';
import { UserService } from '../utility/user.service';
import { Router } from '@angular/router';
import { ActionService } from '../utility/action.service';
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
        this.User.Permissions = [ ];
        this.User.PhotoUrl = '';
    }

    register() {
        if (this.User.Username !== '' && this.User.Password !== '' && this.User.HasAccess) {
            const users = new Array<number>();
            let max = 0;
            this.user.users().subscribe((res: User[]) => {
                res.forEach(element => {
                    users.push(element.Id);
                });
                max = users.sort().reverse()[0];
                this.action.LogAction('New User Id :' + (max + 1).toString(), 1  );
                this.User.Id = max + 1;
                this.User.Permissions = ['/home', 'about', '/login'];
                this.user.register(this.User).subscribe( (res: any) => {
                    if (res) {
                        this.router.navigateByUrl('/login');
                    }
                });
            });

        }        else {

           this.notify.error('Please complete the form!', 'Warning')
        }
    }
}
