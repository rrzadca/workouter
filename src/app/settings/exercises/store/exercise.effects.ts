import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, take} from 'rxjs/operators';

import {ExerciseService} from '../exercise.service';
import * as ExerciseActions from './exercise.actions';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ExerciseEffects {

  loadExercises$ = createEffect(
    () => this.actions$.pipe(
      ofType(ExerciseActions.loadExercises),
      switchMap(() => {
        return this.exerciseService
          .getAll()
          .pipe(
            take(1),
            map(response => ExerciseActions.loadExercisesSuccess({exercises: response})),
            catchError((errorResponse: HttpErrorResponse) =>
              of(ExerciseActions.loadExerciseFailed({ errorMessage: errorResponse.message })))
          );
      })
    )
  );

  addExercise$ = createEffect(
    () => this.actions$.pipe(
      ofType(ExerciseActions.addExercise),
      map(action => action.exercise),
      switchMap(exercise => {
        return this.exerciseService
          .addExercise(exercise)
          .pipe(
            map(id => {
              exercise.id = id;
              return ExerciseActions.addExerciseSuccess({ exercise });
            }),
            catchError(error => of(ExerciseActions.addExerciseFailed({ errorMessage: error })))
          );
      })
    )
  );

  deleteExercise$ = createEffect(
    () => this.actions$.pipe(
      ofType(ExerciseActions.deleteExercise),
      map(action => action.id),
      switchMap(id => {
        return this.exerciseService
          .deleteExercise(id)
          .pipe(
            map(idToDelete => ExerciseActions.deleteExerciseSuccess({ id: idToDelete })),
            catchError(error => of(ExerciseActions.deleteExerciseFailed({ errorMessage: error })))
          );
      })
    )
  );

  constructor(private actions$: Actions,
              private exerciseService: ExerciseService) {
  }
}
