import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkoutRoutingModule } from './workout-routing.module';
import { WorkoutComponent } from './workout/workout.component';
import { WorkoutS1Component } from './workout-s1/workout-s1.component';
import { WorkoutS2Component } from './workout-s2/workout-s2.component';
import { WorkoutS3Component } from './workout-s3/workout-s3.component';
import { WorkoutS4Component } from './workout-s4/workout-s4.component';


@NgModule({
  declarations: [
    WorkoutComponent,
    WorkoutS1Component,
    WorkoutS2Component,
    WorkoutS3Component,
    WorkoutS4Component
  ],
  imports: [
    CommonModule,
    WorkoutRoutingModule
  ]
})
export class WorkoutModule { }
