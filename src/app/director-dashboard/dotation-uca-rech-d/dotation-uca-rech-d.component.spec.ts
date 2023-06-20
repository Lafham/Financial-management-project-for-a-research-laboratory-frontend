import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationUcaRechDComponent } from './dotation-uca-rech-d.component';

describe('DotationUcaRechDComponent', () => {
  let component: DotationUcaRechDComponent;
  let fixture: ComponentFixture<DotationUcaRechDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotationUcaRechDComponent]
    });
    fixture = TestBed.createComponent(DotationUcaRechDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
