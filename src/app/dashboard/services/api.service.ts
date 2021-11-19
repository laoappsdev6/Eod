import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL: string = `http://localhost:25000/api/v1/laoapp-ewallet/`;

  constructor(private http: HttpClient) { }

  ShowIssuerBalance(): Observable<any> { return this.http.post(this.baseURL + `issuer/show-balance`, ''); }
  ShowIssuerIssuedBalance(): Observable<any> { return this.http.post(this.baseURL + `issuer/show-issued-balance`, ''); }
  ShowIssuerHistoryIssued(data: any): Observable<any> { return this.http.post(this.baseURL + `issuer/show-history-issue`, data); }
  IssueNew(data: any): Observable<any> { return this.http.post(this.baseURL + `issuer/issue`, data); }
  ShowIssuerExpendBalance(): Observable<any> { return this.http.post(this.baseURL + `issuer/show-expend-balance`, ''); }
  ShowIssuerHistoryExpend(data: any): Observable<any> { return this.http.post(this.baseURL + `issuer/show-history-expend`, data); }
  IssuerTransfer(data: any): Observable<any> { return this.http.post(this.baseURL + `issuer/pay`, data); }

}
