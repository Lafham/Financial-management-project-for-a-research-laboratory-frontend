import { TestBed } from '@angular/core/testing';

import { ResponsableMService } from './responsable-m.service';

describe('ResponsableMService', () => {
  let service: ResponsableMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsableMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
