import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabasedComponent } from './databased.component';

describe('DatabasedComponent', () => {
  let component: DatabasedComponent;
  let fixture: ComponentFixture<DatabasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatabasedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatabasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
