import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStateComponent } from './dropdown-state.component';

describe('DropdownStateComponent', () => {
  let component: DropdownStateComponent;
  let fixture: ComponentFixture<DropdownStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownStateComponent]
    });
    fixture = TestBed.createComponent(DropdownStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
