import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Billings, BillingClientService, BillingsResponse} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.scss']
})
export class BillingsComponent implements OnInit {
  billings!: any;
  billingsResponse: any;
  @Output()
  billingsResponseOutput: EventEmitter<BillingsResponse>;
  @Output()
  billingsOutput: EventEmitter<Billings>;
  currency: any;

  constructor(private billingClientService: BillingClientService) {
    this.billingsOutput = new EventEmitter<Billings>();
    this.billingsResponseOutput = new EventEmitter<BillingsResponse>();
  }

  ngOnInit(): void {
    this.billingClientService.getBillings().subscribe(value => {
      this.billingsResponse = value;
      this.billings = this.billingsResponse.billings;
      this.currency = this.billingsResponse.currency;
      this.billingsResponseOutput.emit(this.billingsResponse);
    });
  }

  fillFormWithRow(billing: Billings): void {
    this.billingsOutput.emit(billing);
  }
}
