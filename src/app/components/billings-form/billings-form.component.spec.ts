import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingsFormComponent } from './billings-form.component';

describe('BillingsFormComponent', () => {
  let component: BillingsFormComponent;
  let fixture: ComponentFixture<BillingsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
