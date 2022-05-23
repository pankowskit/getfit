import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutS4Component } from './workout-s4.component';

describe('WorkoutS4Component', () => {
  let component: WorkoutS4Component;
  let fixture: ComponentFixture<WorkoutS4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutS4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutS4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
