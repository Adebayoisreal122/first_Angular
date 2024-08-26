import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpromptComponent } from './childprompt.component';

describe('ChildpromptComponent', () => {
  let component: ChildpromptComponent;
  let fixture: ComponentFixture<ChildpromptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildpromptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildpromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
