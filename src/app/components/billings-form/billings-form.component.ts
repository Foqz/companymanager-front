import { Component, OnInit } from '@angular/core';
import {Billings} from '../../services/billing-client.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-billings-form',
  templateUrl: './billings-form.component.html',
  styleUrls: ['./billings-form.component.scss']
})
export class BillingsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submit(form: NgForm): void {
    console.log(form.value);
    console.log(form.touched);
    console.log(form.submitted);
  }
  resetForm(form: NgForm): void  {
    form.resetForm();
  }
}
