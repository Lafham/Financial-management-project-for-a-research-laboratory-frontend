import { TestBed } from '@angular/core/testing';

import { TypeBesoinMService } from './type-besoin-m.service';

describe('TypeBesoinMService', () => {
  let service: TypeBesoinMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeBesoinMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
