import { TestBed } from '@angular/core/testing';

import { BillingClientService } from './billing-client.service';

describe('BillingClientService', () => {
  let service: BillingClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillingClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
