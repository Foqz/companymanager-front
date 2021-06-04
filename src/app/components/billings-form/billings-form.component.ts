import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Billings} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings-form',
  templateUrl: './billings-form.component.html',
  styleUrls: ['./billings-form.component.scss']
})
export class BillingsFormComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    billingId: new FormControl(null), netEarnings: new FormControl(null), vatType: new FormControl(null), citType: new FormControl(null)
  });
  @Input()
  set billingRowInput(value: Billings) {
    this.myForm.get('billingId')?.setValue(value.billingId);
    this.myForm.get('netEarnings')?.setValue(value.netEarnings);
    this.myForm.get('vatType')?.setValue(value.vatValue);
    this.myForm.get('citType')?.setValue(value.citValue);

  }
  constructor() {}

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.myForm.value as BasicBillingForm);
  }
  resetForm(): void  {
    this.myForm.reset();
  }
}
export interface BasicBillingForm {
  billingId: number;
  netEarnings: number;
  vatType: string;
  citType: string;
}
