import { TestBed } from '@angular/core/testing';

import { MembreGardServiceService } from './membre-gard-service.service';

describe('MembreGardServiceService', () => {
  let service: MembreGardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreGardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
