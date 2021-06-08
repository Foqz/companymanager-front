import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBillingModalComponent } from './new-billing-modal.component';

describe('NewBillingModalComponent', () => {
  let component: NewBillingModalComponent;
  let fixture: ComponentFixture<NewBillingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBillingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBillingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
