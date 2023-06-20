import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationProjetDComponent } from './dotation-projet-d.component';

describe('DotationProjetDComponent', () => {
  let component: DotationProjetDComponent;
  let fixture: ComponentFixture<DotationProjetDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotationProjetDComponent]
    });
    fixture = TestBed.createComponent(DotationProjetDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
