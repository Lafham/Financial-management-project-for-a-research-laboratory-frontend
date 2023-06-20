import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBesoinComponent } from './exp-besoin.component';

describe('ExpBesoinComponent', () => {
  let component: ExpBesoinComponent;
  let fixture: ComponentFixture<ExpBesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpBesoinComponent]
    });
    fixture = TestBed.createComponent(ExpBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
