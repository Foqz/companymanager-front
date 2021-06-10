import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Billings, BillingClientService, BillingsResponse} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.scss']
})
export class BillingsComponent implements OnInit {
  month = '06';
  year = '2021';
  billings!: any;
  billingsResponse: any;
  @Output()
  billingsResponseOutput: EventEmitter<BillingsResponse>;
  @Output()
  billingsOutput: EventEmitter<Billings>;
  currency: any;
  @Input()
  set render(shouldRenderTable: boolean) {
    if (shouldRenderTable) {
      this.renderTableAfterTimeout();
    }
  }

  constructor(private billingClientService: BillingClientService) {
    this.billingsOutput = new EventEmitter<Billings>();
    this.billingsResponseOutput = new EventEmitter<BillingsResponse>();
  }

  ngOnInit(): void {
    this.fillBillingTableWithData();
  }

  fillFormWithRow(billing: Billings): void {
    this.billingsOutput.emit(billing);
  }

  public fillBillingTableWithData(): void {
    this.billingClientService.getBillings(this.month, this.year).subscribe(value => {
      this.billingsResponse = value;
      this.billings = this.billingsResponse.billings;
      this.currency = this.billingsResponse.currency;
      this.billingsResponseOutput.emit(this.billingsResponse);
    });
  }

  setMonth(event: Event): void {
    // @ts-ignore
    this.month = event.target.value;
  }

  setYear(event: Event): void {
    // @ts-ignore
    this.year = event.target.value;
  }
  renderTableAfterModalSave(shouldRenderTable: boolean): void {
    if (shouldRenderTable) {
      this.renderTableAfterTimeout();
    }
  }
  renderTableAfterTimeout(): void {
    setTimeout(() => {
      console.log('backend synchronization');
      this.fillBillingTableWithData();
    }, 500);
  }
}
