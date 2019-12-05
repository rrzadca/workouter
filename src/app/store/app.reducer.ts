import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromExercise from '../settings/exercises/store/exercise.reducer';

export interface AppState {
  auth: fromAuth.State;
  exercise: fromExercise.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.reducer,
  exercise: fromExercise.reducer
};
