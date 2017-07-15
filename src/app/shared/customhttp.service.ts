import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { UserService } from '../utility/user.service';
import { AppSettings } from '../utility/appsettings'
@Injectable()
export class HttpClient {

    private headers: Headers = new Headers();
    private ApiUrl: string;
    private options: RequestOptionsArgs;

    public Token;
    constructor(private http: Http, private userservice: UserService, private appsettings: AppSettings) {
            this.Token = this.userservice.getAccessToken();
            this.options =  this.createAuthorizationHeader(this.headers);
            this.ApiUrl = this.appsettings.ApiDomain;
    }

    createAuthorizationHeader(headers: Headers): RequestOptionsArgs {
     headers.append('Authorization', 'bearer ' + this.Token);
     return {headers : this.headers};
    }

    get(url: string) {
        return this.http.get(this.ApiUrl + url, this.options);
    }

    getByParams(url: string, params: URLSearchParams) {
      const url_params = new URLSearchParams();
      url_params.appendAll(params);
      this.options.params = url_params;
       return this.http.get(this.ApiUrl + url, this.options);
    }

    post(url: string, body: any) {
        return this.http.post(this.ApiUrl + url, body, this.options);
    }
    update(url: string, body: any) {
         return this.http.put(this.ApiUrl + url, body, this.options);
    }

    delete(url: string, body: any) {
         return this.http.post(this.ApiUrl + url, body, this.options);
    }
}
