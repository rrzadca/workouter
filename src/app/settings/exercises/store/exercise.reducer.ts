import {Exercise} from '../exercise.model';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as ExerciseActions from './exercise.actions';

export interface State {
  exercises: Exercise[];
  errorMessage: string;
}

const initialState: State = {
  exercises: [],
  errorMessage: null
};

const exerciseReducer = createReducer(
  initialState,
  on(
    ExerciseActions.loadExercises,
      state => ({
        ...state
      })
  ),
  on(
    ExerciseActions.loadExercisesSuccess,
    (state, action) => ({
      ...state,
      exercises: action.exercises
    })
  ),
  on(
    ExerciseActions.loadExerciseFailed,
    (state, action) => ({
      ...state,
      errorMessage: action.errorMessage
    })
  ),
  on(
    ExerciseActions.addExercise,
    (state, action) => ({
      ...state
    })
  )
);

export function reducer(state: State, action: Action) {
  return exerciseReducer(state, action);
}

export const getExerciseState = createFeatureSelector<State>('exercise');
export const getExercises = createSelector(getExerciseState, (state: State) => state.exercises);
