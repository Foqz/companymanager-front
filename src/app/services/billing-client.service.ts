import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingClientService {

  constructor(private httpClient: HttpClient) {
  }
  public getBillings(): Observable<Billing> {
    return this.httpClient.get<Billing>('http://localhost:8080/api/monthly-billing', {params: {date: '2021-05-01'}});
  }
}
export interface Billing {
  billingId: number;
  date: string;
  grossEarnings: number;
  netEarnings: number;
  vat: number;
  monthlyCosts: any[];
}
