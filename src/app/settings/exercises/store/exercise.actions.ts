import {createAction, props} from '@ngrx/store';
import {Exercise} from '../exercise.model';

export const loadExercises = createAction('[Exercise list tab] Load exercises');
export const loadExercisesSuccess = createAction('[Exercise API] Load exercises success', props<{ exercises: Exercise[] }>());
export const loadExerciseFailed = createAction('[Exercise API] Load exercises failed', props<{ errorMessage: string }>());
