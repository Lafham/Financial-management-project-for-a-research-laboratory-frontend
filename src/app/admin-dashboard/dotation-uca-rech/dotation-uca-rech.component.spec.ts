import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotationUCARechComponent } from './dotation-uca-rech.component';

describe('DotationUCARechComponent', () => {
  let component: DotationUCARechComponent;
  let fixture: ComponentFixture<DotationUCARechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DotationUCARechComponent]
    });
    fixture = TestBed.createComponent(DotationUCARechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
