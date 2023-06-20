import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpBesoinDComponent } from './exp-besoin-d.component';

describe('ExpBesoinDComponent', () => {
  let component: ExpBesoinDComponent;
  let fixture: ComponentFixture<ExpBesoinDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpBesoinDComponent]
    });
    fixture = TestBed.createComponent(ExpBesoinDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
