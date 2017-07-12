import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './shared/entities/users';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  apiUrl: string;
  isLoggedIn: boolean;
  apiValidateUrl: string;
  claims: any;

  constructor(private http: Http) {
      this.apiUrl = 'http://azureshit.com/api/shit';
      this.apiValidateUrl = '';
  }

  AuthenticateUser(User: User) {
      this.http.post(this.apiUrl, User).subscribe(arg => this.SetClaims(arg));
  }

  SetClaims(claimsObj: any) {
    this.claims = claimsObj;
    if ( this.ValildateApi(this.claims.token) ) {
        this.isLoggedIn = true;
    }
  }

  ValildateApi(token: string): boolean {
    this.http.post(this.apiValidateUrl, token);
    return true;
  }

}
