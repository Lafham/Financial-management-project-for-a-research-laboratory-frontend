import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationMembreComponent } from './dotation-membre.component';

describe('DotationMembreComponent', () => {
  let component: DotationMembreComponent;
  let fixture: ComponentFixture<DotationMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotationMembreComponent]
    });
    fixture = TestBed.createComponent(DotationMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
