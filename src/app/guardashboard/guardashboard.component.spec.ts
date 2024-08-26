import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardashboardComponent } from './guardashboard.component';

describe('GuardashboardComponent', () => {
  let component: GuardashboardComponent;
  let fixture: ComponentFixture<GuardashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
