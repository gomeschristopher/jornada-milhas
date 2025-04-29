import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementSearchComponent } from './complement-search.component';

describe('ComplementSearchComponent', () => {
  let component: ComplementSearchComponent;
  let fixture: ComponentFixture<ComplementSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplementSearchComponent]
    });
    fixture = TestBed.createComponent(ComplementSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
