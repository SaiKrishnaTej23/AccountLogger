import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../shared/customhttp.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LedgerService {
  constructor(private http: HttpClient) {

  }

 getLedgers(): Observable<Response> {
    return this.http.get('ledger');
 }

}
