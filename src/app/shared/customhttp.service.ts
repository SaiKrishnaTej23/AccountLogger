import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptionsArgs } from '@angular/http';
import {UserService } from '../utility/user.service';
@Injectable()
export class HttpClient {

    private headers: Headers = new Headers();

    private options: RequestOptionsArgs;

    public Token;

    constructor(private http: Http, private userservice: UserService) {
            this.options =  this.createAuthorizationHeader(this.headers);
            this.Token = this.userservice.getAccessToken();
     }

    createAuthorizationHeader(headers: Headers) {
     headers.append('Authorization', 'bearer ' + this.Token);
     return this.headers;
    }

    get(url: string) {
        return this.http.get(url, this.options).map((response: Response) => response.json());
    }

    post(url: string, body: any) {
        return this.http.post(url, body, this.options).map((response: Response) => response.json());
    }
    update(url: string, body: any) {
         return this.http.put(url, body, this.options).map((response: Response) => response.json());
    }

    delete(url: string, body: any) {
         return this.http.post(url, body, this.options).map((response: Response) => response.json());
    }
}
