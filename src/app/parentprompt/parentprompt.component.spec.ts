import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentpromptComponent } from './parentprompt.component';

describe('ParentpromptComponent', () => {
  let component: ParentpromptComponent;
  let fixture: ComponentFixture<ParentpromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentpromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
