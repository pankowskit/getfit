import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutS2Component } from './workout-s2.component';

describe('WorkoutS2Component', () => {
  let component: WorkoutS2Component;
  let fixture: ComponentFixture<WorkoutS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
