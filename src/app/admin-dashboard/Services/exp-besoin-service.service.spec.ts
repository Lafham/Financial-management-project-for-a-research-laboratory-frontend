import { TestBed } from '@angular/core/testing';

import { ExpBesoinServiceService } from './exp-besoin-service.service';

describe('ExpBesoinServiceService', () => {
  let service: ExpBesoinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpBesoinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
