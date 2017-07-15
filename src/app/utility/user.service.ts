// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../shared/entities/users';
import { Roles } from '../shared/entities/roles';
import { AppSettings } from '../utility/appsettings';
import { Constants } from './constants';

@Injectable()
export class UserService {

  private loggedIn: boolean;

  base_address: string = this.appsettings.DataApiDomain;

    constructor(private http: Http, private appsettings: AppSettings) {
        this.loggedIn = !!localStorage.getItem(Constants.AccessToken);
    }

    login(username, password) {
        const headers = new Headers();
        headers.append('Content-Type', Constants.ContentType);
        headers.append('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
        headers.append('Access-Control-Allow-Origin', '*');

        const credentials = `UserName=${username}&Password=${password}&grant_type=${Constants.GrantType}`;
        return this.http.post(this.appsettings.TokenUrl, credentials , { headers })
            .map(res => res.json())
            .map((res) => {
                if (res.access_token) {
                    localStorage.setItem(Constants.AccessToken, res.access_token);
                    localStorage.setItem('userName', res.userName);
                    console.log(localStorage.getItem(Constants.AccessToken));
                    this.loggedIn = true;
                    return true;
                }
            });
    }

    logout() {
        localStorage.removeItem(Constants.AccessToken);
        this.loggedIn = false;
    }

    isLoggedIn(): boolean {
        return this.loggedIn;
    }

    userDetails () {
      return  { isLogged : this.loggedIn, userName: localStorage.getItem('userName')  };
    }

    getAccessToken() {
      return localStorage.getItem(Constants.AccessToken);
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
}

