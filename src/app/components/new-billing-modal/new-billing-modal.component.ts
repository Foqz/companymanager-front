import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {BillingClientService} from '../../services/billing-client.service';

@Component({
  selector: 'app-new-billing-modal',
  templateUrl: './new-billing-modal.component.html',
  styleUrls: ['./new-billing-modal.component.scss']
})
export class NewBillingModalComponent implements OnInit {
  newBillingForm: FormGroup = new FormGroup({
    date: new FormControl(null), netEarnings: new FormControl(null), vatType: new FormControl(null), citType: new FormControl(null)
  });
  closeResult = '';

  constructor(private modalService: NgbModal, private billingClientService: BillingClientService) {
  }

  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.billingClientService.saveNewBilling(this.newBillingForm.value);
  }

  resetForm(): void {
    this.newBillingForm.reset();
  }
}
export interface NewBillingForm {
  date: { year: string, month: string, day: string };
  netEarnings: number;
  vatType: string;
  citType: string;
}
