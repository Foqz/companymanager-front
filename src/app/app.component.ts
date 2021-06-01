import { Component } from '@angular/core';
import {Billings} from './services/billing-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'companymanager-front';
  billingOutput: Billings = {} as Billings;

  setBillingOutput(billingOutput: Billings): void {
    this.billingOutput = billingOutput;
  }
}
