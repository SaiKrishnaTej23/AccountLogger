import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpModule } from '@angular/http';
import { LoginRoutingModule, routedComponents } from './login.route';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NotificationsService } from 'angular2-notifications';

@NgModule({
    imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule, HttpModule, SimpleNotificationsModule],
    exports: [],
    declarations: [LoginComponent],
    providers: [NotificationsService],
})
export class LoginModule { }
