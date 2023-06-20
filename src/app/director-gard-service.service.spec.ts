import { TestBed } from '@angular/core/testing';

import { DirectorGardServiceService } from './director-gard-service.service';

describe('DirectorGardServiceService', () => {
  let service: DirectorGardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirectorGardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
