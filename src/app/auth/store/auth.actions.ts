import {createAction, props, union} from '@ngrx/store';
import {User} from '../user.model';

export const startLogin = createAction('[Login Page] Start login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Login API] Login success', props<{ user: User }>());
export const loginFailed = createAction('[Login API] Login failed', props<{ errorMessage: string }>());
export const logout = createAction('[Login Page] Logout');

export const startSignup = createAction('[Signup Page] Start signup', props<{ email: string, password: string }>());
export const signupSuccess = createAction('[Signup API] Signup success', props<{ user: User }>());
export const signupFailed = createAction('[Signup API] Signup failed', props<{ errorMessage: string}>());
