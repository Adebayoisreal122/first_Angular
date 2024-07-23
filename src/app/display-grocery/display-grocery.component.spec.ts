import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGroceryComponent } from './display-grocery.component';

describe('DisplayGroceryComponent', () => {
  let component: DisplayGroceryComponent;
  let fixture: ComponentFixture<DisplayGroceryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayGroceryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGroceryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
