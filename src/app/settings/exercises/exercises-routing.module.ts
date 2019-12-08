import {RouterModule, Routes} from '@angular/router';
import {ExerciseListComponent} from './exercise-list/exercise-list.component';
import {ExerciseEditComponent} from './exercise-edit/exercise-edit.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', component: ExerciseListComponent },
  { path: 'new', component: ExerciseEditComponent },
  { path: 'edit/:id', component: ExerciseEditComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ExercisesRoutingModule {}
