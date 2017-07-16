import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient } from '../shared/customhttp.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PettyCashLedgerService {
  constructor(private http: HttpClient) { }

getLedgers(): Observable<Response> {
    return this.http.get('ledger');
 }

 getPettyCashLedgers(): Observable<Response> {
   return this.http.get('pcledger');
 }
}
