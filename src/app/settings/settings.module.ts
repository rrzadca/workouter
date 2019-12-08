import {NgModule} from '@angular/core';

import {ExercisesModule} from './exercises/exercises.module';
import {TrainingsModule} from './trainings/trainings.module';

@NgModule({
  imports: [
    ExercisesModule,
    TrainingsModule
  ],
  exports: [
    ExercisesModule,
    TrainingsModule
  ]
})
export class SettingsModule {}
