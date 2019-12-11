import {createAction, props} from '@ngrx/store';
import {Exercise} from '../exercise.model';

export const loadExercises = createAction('[Exercise list tab] Load exercises');
export const loadExercisesSuccess = createAction('[Exercise API] Load exercises success', props<{ exercises: Exercise[] }>());
export const loadExerciseFailed = createAction('[Exercise API] Load exercises failed', props<{ errorMessage: string }>());

export const addExercise = createAction('[Exercise list tab] Add exercise', props<{ exercise: Exercise }>());
export const addExerciseSuccess = createAction('[Exercise API] Add exercise success', props<{ exercise: Exercise }>());
export const addExerciseFailed = createAction('[Exercise API] Add exercise failed', props<{ errorMessage: string }>());

export const updateExercise = createAction('[Exercise list tab] Update exercise', props<{ id: string, exercise: Exercise }>());
export const updateExerciseSuccess = createAction('[Exercise API] Update exercise success');
export const updateExerciseFailed = createAction('[Exercise API] Update exercise failed', props<{ errorMessage: string }>());

export const deleteExercise = createAction('[Exercise list tab] Delete exercise', props<{ id: string }>());
export const deleteExerciseSuccess = createAction('[Exercise API] Delete exercise success', props<{ id: string }>());
export const deleteExerciseFailed = createAction('[Exercise API] Delete exercise failed', props<{ errorMessage: string }>());
