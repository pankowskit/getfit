import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutS1Component } from './workout-s1.component';

describe('WorkoutS1Component', () => {
  let component: WorkoutS1Component;
  let fixture: ComponentFixture<WorkoutS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
