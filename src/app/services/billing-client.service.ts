import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingClientService {

  constructor(private httpClient: HttpClient) {
  }
  public getBillings(): Observable<Billings> {
    return this.httpClient.get<Billings>('http://localhost:8080/api/monthly-billing', {params: {date: '2021-05-01'}});
  }
}
export interface Billings {
  billingId: number;
  date: string;
  grossEarnings: number;
  netEarnings: number;
  vat: number;
  monthlyCosts: any[];
}
