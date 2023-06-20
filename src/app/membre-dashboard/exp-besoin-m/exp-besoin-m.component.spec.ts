import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBesoinMComponent } from './exp-besoin-m.component';

describe('ExpBesoinMComponent', () => {
  let component: ExpBesoinMComponent;
  let fixture: ComponentFixture<ExpBesoinMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpBesoinMComponent]
    });
    fixture = TestBed.createComponent(ExpBesoinMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
