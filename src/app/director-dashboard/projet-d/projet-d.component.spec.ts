import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetDComponent } from './projet-d.component';

describe('ProjetDComponent', () => {
  let component: ProjetDComponent;
  let fixture: ComponentFixture<ProjetDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetDComponent]
    });
    fixture = TestBed.createComponent(ProjetDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
