import { TestBed } from '@angular/core/testing';

import { DotProjetService } from './dot-projet.service';

describe('DotProjetService', () => {
  let service: DotProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
