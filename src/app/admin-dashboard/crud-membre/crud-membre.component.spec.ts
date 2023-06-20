import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMembreComponent } from './crud-membre.component';

describe('CrudMembreComponent', () => {
  let component: CrudMembreComponent;
  let fixture: ComponentFixture<CrudMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudMembreComponent]
    });
    fixture = TestBed.createComponent(CrudMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
