import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationMembreDComponent } from './dotation-membre-d.component';

describe('DotationMembreDComponent', () => {
  let component: DotationMembreDComponent;
  let fixture: ComponentFixture<DotationMembreDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotationMembreDComponent]
    });
    fixture = TestBed.createComponent(DotationMembreDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
