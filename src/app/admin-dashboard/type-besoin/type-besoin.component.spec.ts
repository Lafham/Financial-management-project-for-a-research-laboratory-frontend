import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBesoinComponent } from './type-besoin.component';

describe('TypeBesoinComponent', () => {
  let component: TypeBesoinComponent;
  let fixture: ComponentFixture<TypeBesoinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypeBesoinComponent]
    });
    fixture = TestBed.createComponent(TypeBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
