import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutS3Component } from './workout-s3.component';

describe('WorkoutS3Component', () => {
  let component: WorkoutS3Component;
  let fixture: ComponentFixture<WorkoutS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
