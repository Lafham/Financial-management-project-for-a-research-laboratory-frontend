import { TestBed } from '@angular/core/testing';

import { ExpBesoinMService } from './exp-besoin-m.service';

describe('ExpBesoinMService', () => {
  let service: ExpBesoinMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpBesoinMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
