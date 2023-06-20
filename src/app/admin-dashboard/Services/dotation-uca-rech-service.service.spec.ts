import { TestBed } from '@angular/core/testing';

import { DotationUcaRechServiceService } from './dotation-uca-rech-service.service';

describe('DotationUcaRechServiceService', () => {
  let service: DotationUcaRechServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotationUcaRechServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
