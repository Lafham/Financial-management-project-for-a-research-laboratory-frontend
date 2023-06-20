import { TestBed } from '@angular/core/testing';

import { MembreServiceMService } from './membre-service-m.service';

describe('MembreServiceMService', () => {
  let service: MembreServiceMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembreServiceMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
