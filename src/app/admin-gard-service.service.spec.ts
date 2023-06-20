import { TestBed } from '@angular/core/testing';

import { AdminGuardService } from './admin-gard-service.service';

describe('AdminGardServiceService', () => {
  let service: AdminGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
