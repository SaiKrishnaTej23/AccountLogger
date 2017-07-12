// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccountsRoutingModule, routedComponents } from './app.route';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// components
import { AppComponent } from './app.component';
import { AccountsComponent } from './accounts/accounts.component';
import { NavComponent } from './shared/nav/nav.component';
import { FootComponent } from './shared/foot/foot.component';

// services
import { ObserveService } from './utility/observeservice';
import { UtilityService } from './utility/utilityservice';
import { ActionService } from './utility/action.service';
import { UserService } from './utility/user.service';
import { EventBusService } from './utility/eventbus.service'
import { HttpClient } from './shared/customhttp.service';
import { NotificationsService } from 'angular2-notifications';

import { AppSettings } from './utility/appsettings'

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    NavComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AccountsRoutingModule,
    HttpModule,
    SimpleNotificationsModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [
     HttpClient,
    ObserveService,
    UtilityService,
    UserService,
    ActionService,
    EventBusService,
    AppSettings,
    NotificationsService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
