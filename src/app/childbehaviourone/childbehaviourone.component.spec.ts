import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildbehaviouroneComponent } from './childbehaviourone.component';

describe('ChildbehaviouroneComponent', () => {
  let component: ChildbehaviouroneComponent;
  let fixture: ComponentFixture<ChildbehaviouroneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildbehaviouroneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildbehaviouroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
