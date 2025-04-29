import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPassageComponent } from './featured-passage.component';

describe('FeaturedPassageComponent', () => {
  let component: FeaturedPassageComponent;
  let fixture: ComponentFixture<FeaturedPassageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedPassageComponent]
    });
    fixture = TestBed.createComponent(FeaturedPassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
