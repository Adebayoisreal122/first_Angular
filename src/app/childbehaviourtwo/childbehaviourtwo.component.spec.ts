import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbehaviourtwoComponent } from './childbehaviourtwo.component';

describe('ChildbehaviourtwoComponent', () => {
  let component: ChildbehaviourtwoComponent;
  let fixture: ComponentFixture<ChildbehaviourtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildbehaviourtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbehaviourtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
