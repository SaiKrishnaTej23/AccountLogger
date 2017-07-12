// user.service.ts
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from '../shared/entities/users';
// import localStorage from 'localStorage';
import { AppSettings } from '../utility/appsettings';

@Injectable()
export class UserService {
 private loggedIn = false;
    base_address: string = this.appsettings.DataApiDomain;

    constructor(private http: Http, private appsettings: AppSettings) {
        this.loggedIn = !!localStorage.getItem('access_token');
    }

    login(username, password) {
      if (this.loggedIn === true)    {
        const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        const credentials = 'UserName=' + username + '&Password=' + password + '&grant_type=password';
        return this.http.post(this.appsettings.TokenUrl, credentials , { headers })
            .map(res => res.json())
            .map((res) => {
              console.log(res);
                if (res.access_token) {
                    localStorage.setItem('access_token', res.access_token);
                    localStorage.setItem('userName', res.userName);
                    console.log(localStorage.getItem('access_token'));
                    this.loggedIn = true;
                }
            });
      }
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    userDetails() {
     const userId =  localStorage.getItem('userName');

      return this.http.get(this.base_address + '/users/' + userId.toString())
       .map(res => res.json());
    }

    getAccessToken() {
      return localStorage.getItem('access_token');
    }
    getValues() {
      const headers = new Headers();
         headers.append('Authorization', 'bearer ' + localStorage.getItem('access_token'));
     return  this.http.get('http://10.26.44.131/WebAPIOAuth/api/values', { headers})
     .map(res => res.json())
     .map((res) => {
              console.log(res);
            });
    }
    register(User: User) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:4200')

        return this.http.post(this.base_address + '/register', JSON.stringify({ User }), { headers })
            .map(res => res.json())
            .map((res) => {
                return res.success;
            });
    }

    users() {
        return this.http.get(this.base_address + '/users/')
       .map(res => res.json());
    }
}
