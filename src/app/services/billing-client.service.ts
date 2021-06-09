import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NewBillingForm} from '../components/new-billing-modal/new-billing-modal.component';
import {DatePipe} from '@angular/common';
import {BasicBillingForm} from '../components/billings-form/billings-form.component';

@Injectable({
  providedIn: 'root'
})
export class BillingClientService {
  formValue: any;

  constructor(private httpClient: HttpClient, private datePipe: DatePipe) {
  }
  public getBillings(month: string, year: string): Observable<BillingsResponse> {
    const dateParam = year + '-' + month  + '-' + '01';
    return this.httpClient.get<BillingsResponse>('http://localhost:8080/api/billing', {params: {date: dateParam}});
  }
  public saveNewBilling(newBillingForm: NewBillingForm): void {
    const dateParam = newBillingForm.date.year + '-' + newBillingForm.date.month  + '-' + newBillingForm.date.day;
    this.httpClient.post('http://localhost:8080/api/billing', {
      date: this.datePipe.transform(dateParam, 'yyyy-MM-dd'),
      netEarnings: newBillingForm.netEarnings,
      citType: newBillingForm.citType,
      vatType: newBillingForm.vatType
    }).subscribe(data =>
    console.log(data));
  }
  public updateBilling(basicBillingForm: BasicBillingForm): void {
    console.log(basicBillingForm);
    this.httpClient.post('http://localhost:8080/api/billing', {
      billingId: basicBillingForm.billingId,
      netEarnings: basicBillingForm.netEarnings,
      citType: basicBillingForm.citType,
      vatType: basicBillingForm.vatType
    }).subscribe(data =>
      console.log(data));
  }
  public deleteBilling(billingRequest: BillingsRequest): void {
    this.httpClient.delete('http://localhost:8080/api/billing',
      {params: {billingId: billingRequest.billingId}}).subscribe(data => console.log(data));
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
export interface BillingsRequest {
  billingId: number;
  netEarnings: number;
  date: string;
  vatType: string;
  citType: string;
}
