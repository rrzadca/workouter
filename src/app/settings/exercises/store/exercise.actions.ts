import {createAction, props} from '@ngrx/store';
import {Exercise} from '../exercise.model';

export const loadExercises = createAction('[Exercise list tab] Load exercises');
export const loadExercisesSuccess = createAction('[Exercise API] Load exercises success', props<{ exercises: Exercise[] }>());
export const loadExerciseFailed = createAction('[Exercise API] Load exercises failed', props<{ errorMessage: string }>());

export const addExercise = createAction('[Exercise edit dialog] Add exercise');
export const addExerciseSuccess = createAction('[Exercise API] Add exercise success', props<{ exercise: Exercise }>());
export const addExerciseFailed = createAction('[Exercise API] Add exercise failed');

export const updateExercise = createAction('[Exercise edit dialog] Update exercise', props<{ id: number, exercise: Exercise }>());
export const updateExerciseSuccess = createAction('[Exercise API] Update exercise success');
export const updateExerciseFailed = createAction('[Exercise API] Update exercise failed');
