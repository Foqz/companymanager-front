import {Component, OnInit} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';

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

  constructor(private modalService: NgbModal) {
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
    console.log(this.newBillingForm.value as NewBillingForm);
  }

  resetForm(): void {
    this.newBillingForm.reset();
  }
}
export interface NewBillingForm {
  date: string;
  netEarnings: number;
  vatType: string;
  citType: string;
}
