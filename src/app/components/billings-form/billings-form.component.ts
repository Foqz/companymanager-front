import { Component, OnInit } from '@angular/core';
import {Billings} from '../../services/billing-client.service';

@Component({
  selector: 'app-billings-form',
  templateUrl: './billings-form.component.html',
  styleUrls: ['./billings-form.component.scss']
})
export class BillingsFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
