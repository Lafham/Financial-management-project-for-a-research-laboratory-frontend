import { TestBed } from '@angular/core/testing';

import { ResponsableGardServiceService } from './responsable-gard-service.service';

describe('ResponsableGardServiceService', () => {
  let service: ResponsableGardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableGardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
