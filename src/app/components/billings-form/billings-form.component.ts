import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BillingClientService, Billings, BillingsRequest} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings-form',
  templateUrl: './billings-form.component.html',
  styleUrls: ['./billings-form.component.scss']
})
export class BillingsFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    billingId: new FormControl(null), netEarnings: new FormControl(null), vatType: new FormControl(null), citType: new FormControl(null)
  });
  billingsRequest: BillingsRequest = {} as BillingsRequest;
  @Input()
  set billingRowInput(value: Billings) {
    this.myForm.get('billingId')?.setValue(value.billingId);
    this.myForm.get('netEarnings')?.setValue(value.netEarnings);
    this.myForm.get('vatType')?.setValue(value.vatType);
    this.myForm.get('citType')?.setValue(value.citType);
    this.billingsRequest.billingId = value.billingId;
    this.billingsRequest.netEarnings = value.netEarnings;
    this.billingsRequest.vatType = value.vatType;
    this.billingsRequest.citType = value.citType;
    this.billingsRequest.date = value.date;
  }
  @Output()
  renderOutputFromBillingForm: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private billingClientService: BillingClientService) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.billingClientService.updateBilling(this.myForm.value);
    this.renderOutputFromBillingForm.emit(true);
    this.myForm.reset();
  }
  resetForm(): void  {
    this.myForm.reset();
  }
  deleteBilling(): void {
    this.billingClientService.deleteBilling(this.billingsRequest);
    this.renderOutputFromBillingForm.emit(true);
    this.myForm.reset();
  }
}
export interface BasicBillingForm {
  billingId: number;
  netEarnings: number;
  vatType: string;
  citType: string;
}
