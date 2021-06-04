import { Component } from '@angular/core';
import {Billings, BillingsResponse} from './services/billing-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'companymanager-front';
  billingOutput: Billings = {} as Billings;
  billingsResponseOutput: BillingsResponse = {} as BillingsResponse;

  setBillingOutput(billingOutput: Billings): void {
    this.billingOutput = billingOutput;
  }
  setBillingsResponseOutput(billingResponseOutput: BillingsResponse): void {
    this.billingsResponseOutput = billingResponseOutput;
  }
}
