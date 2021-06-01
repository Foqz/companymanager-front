import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Billings, BillingClientService} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.scss']
})
export class BillingsComponent implements OnInit {
  messageForUser!: string;
  billings!: any;
  @Output()
  billingOutput: EventEmitter<Billings>;
  constructor(private billingClientService: BillingClientService ) {
    this.billingOutput = new EventEmitter<Billings>();
  }

  ngOnInit(): void {
    this.billingClientService.getBillings().subscribe(value => {
      this.billings = value;
    });
  }

  fillFormWithRow(billing: Billings): void {
    this.billingOutput.emit(billing);
  }
}
