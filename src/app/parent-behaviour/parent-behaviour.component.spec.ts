import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentBehaviourComponent } from './parent-behaviour.component';

describe('ParentBehaviourComponent', () => {
  let component: ParentBehaviourComponent;
  let fixture: ComponentFixture<ParentBehaviourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentBehaviourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentBehaviourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
