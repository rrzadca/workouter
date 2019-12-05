import {NgModule} from '@angular/core';
import {SettingsComponent} from './settings.component';
import {ExerciseListComponent} from './exercises/exercise-list/exercise-list.component';
import {SharedModule} from '../shared/shared.module';
import {TrainingPlansListComponent} from './trainings/training-plans-list/training-plans-list.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ExerciseListComponent,
    TrainingPlansListComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SettingsModule {}
