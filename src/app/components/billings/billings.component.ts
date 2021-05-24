import { Component, OnInit } from '@angular/core';
import {Billings, BillingClientService} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings',
  templateUrl: './billings.component.html',
  styleUrls: ['./billings.component.scss']
})
export class BillingsComponent implements OnInit {
  messageForUser!: string;
  billings!: any;

  constructor(private billingClientService: BillingClientService ) {
  }

  ngOnInit(): void {
    this.billingClientService.getBillings().subscribe(value => {
      this.billings = value;
    });
  }

  sayHello(value: string): void {
    this.messageForUser = 'Hello ' + value;
  }
}
