import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {BillingClientService} from '../../services/billing-client.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  constructor(private billingClientService: BillingClientService) { }

  ngOnInit(): void {
  }

  getTableData(): void {

  }
}
