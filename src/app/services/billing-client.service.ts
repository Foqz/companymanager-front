import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingClientService {
  formValue: any;

  constructor(private httpClient: HttpClient) {
  }
  public getBillings(): Observable<BillingsResponse> {
    return this.httpClient.get<BillingsResponse>('http://localhost:8080/api/billing', {params: {date: '2021-05-01'}});
  }
}
export interface BillingsResponse {
  billings: Billings;
  sumNetEarnings: number;
  sumGrossEarnings: number;
  sumVatValue: number;
  sumCitValue: number;
  zusValue: number;
  sumEarningsOnHand: number;
  currency: number;
}

export interface Billings {
  billingId: number;
  date: string;
  grossEarnings: number;
  netEarnings: number;
  vatValue: number;
  citValue: number;
  earningsOnHand: number;
  vatType: string;
  citType: string;
  monthlyCosts: any[];
}
