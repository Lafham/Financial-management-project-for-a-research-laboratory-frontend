import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembreDComponent } from './membre-d.component';

describe('MembreDComponent', () => {
  let component: MembreDComponent;
  let fixture: ComponentFixture<MembreDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MembreDComponent]
    });
    fixture = TestBed.createComponent(MembreDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
