import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';

import {ExerciseService} from '../exercise.service';
import * as ExerciseActions from './exercise.actions';
import {of} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class ExerciseEffects {

  loadExercises$ = createEffect(
    () => this.actions$.pipe(
      ofType(ExerciseActions.loadExercises),
      mergeMap(action => {
        return this.exerciseService
          .getAll()
          .pipe(
            map(response => ExerciseActions.loadExercisesSuccess({ exercises: response })),
            catchError((errorResponse: HttpErrorResponse) => of(ExerciseActions.loadExerciseFailed({ errorMessage: errorResponse.message })))
          );
      })
    )
  );

  constructor(private actions$: Actions,
              private exerciseService: ExerciseService) {
  }
}
