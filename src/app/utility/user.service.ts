// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../shared/entities/users';
import { Roles } from '../shared/entities/roles';
import { AppSettings } from '../utility/appsettings';
import { Constants } from './constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private loggedIn: boolean;

  base_address: string = this.appsettings.DataApiDomain;

    constructor(private http: Http, private appsettings: AppSettings) {
        this.loggedIn = !!localStorage.getItem(appsettings.AccessToken);
    }

    login(username, password) {
        const headers = new Headers();
        headers.append('Content-Type', this.appsettings.ContentType);
        headers.append('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
        headers.append('Access-Control-Allow-Origin', '*');

        const credentials = `UserName=${username}&Password=${password}&grant_type=${this.appsettings.GrantType}`;
        return this.http.post(this.appsettings.TokenUrl, credentials , { headers })
            .map(res => res.json())
            .map((res) => {
                if (res.access_token) {
                    localStorage.setItem(this.appsettings.AccessToken, res.access_token);
                    localStorage.setItem('userName', res.userName);
                    this.loggedIn = true;
                    return true;
                }
            });
    }

    logout(): Observable<Response> {
        const headers = new Headers();
        headers.append('Authorization', 'bearer ' + localStorage.getItem(this.appsettings.AccessToken));
         localStorage.removeItem(this.appsettings.AccessToken);
        this.loggedIn = false;
        return this.http.post('http://api.nmbipl.com/api/Account/Logout', { }, {headers : headers});
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    userDetails () {
      return  { isLogged : this.loggedIn, userName: localStorage.getItem('userName')  };
    }

    getAccessToken() {
      return localStorage.getItem(this.appsettings.AccessToken);
    }

    register(User: User) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*')

        return this.http.post(this.base_address + '/register', JSON.stringify({ User }), { headers })
            .map(res => res.json())
            .map((res) => {
                return res.success;
            });
    }

    getUserRoles(): Array<Roles> {
      return new Array<Roles>();
      }

    getUserDetails() {
        const headers = new Headers();
        headers.append('Cache-control', 'no-cache');
        headers.append('Cache-control', 'no-store');
        headers.append('Expires', '0');
        headers.append('Pragma', 'no-cache');
        headers.append('Authorization', 'bearer ' + localStorage.getItem(this.appsettings.AccessToken));
        return this.http.get('http://api.nmbipl.com/api/Account/Userinfo', {headers : headers});
    }

    getRoleFeatures() {
      const headers = new Headers();
        headers.append('Authorization', 'bearer ' + localStorage.getItem(this.appsettings.AccessToken));
        return this.http.get('http://api.nmbipl.com/api/Account/getrolefeatures', {headers : headers});
    }
}

