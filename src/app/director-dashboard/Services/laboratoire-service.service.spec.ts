import { TestBed } from '@angular/core/testing';

import { LaboratoiresService } from './laboratoire-service.service';

describe('LaboratoireServiceService', () => {
  let service: LaboratoiresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoiresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
