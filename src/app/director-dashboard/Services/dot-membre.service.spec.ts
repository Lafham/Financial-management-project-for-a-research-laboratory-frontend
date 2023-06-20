import { TestBed } from '@angular/core/testing';

import { DotMembreService } from './dot-membre.service';

describe('DotMembreService', () => {
  let service: DotMembreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotMembreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
