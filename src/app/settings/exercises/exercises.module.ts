import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {ExerciseListComponent} from './exercise-list/exercise-list.component';
import {ExerciseEditComponent} from './exercise-edit/exercise-edit.component';
import {ExercisesComponent} from './exercises.component';
import {ExercisesRoutingModule} from './exercises-routing.module';

@NgModule({
  declarations: [
    ExercisesComponent,
    ExerciseListComponent,
    ExerciseEditComponent
  ],
  exports: [
    ExercisesComponent
  ],
  imports: [
    SharedModule,
    ExercisesRoutingModule
  ],
  entryComponents: [
    ExerciseEditComponent
  ]
})
export class ExercisesModule {}
