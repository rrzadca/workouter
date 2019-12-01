import {User} from '../user.model';
import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  user: User;
  authError: string;
  isLoading: boolean;
}

export const initialState: State = {
  user: null,
  authError: null,
  isLoading: false
};

const authReducer = createReducer(
  initialState,
  on(AuthActions.startLogin, state => ({ ...state, isLoading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, isLoading: false, user })),
  on(AuthActions.loginFailed, (state, { errorMessage }) => ({ ...state, isLoading: false, authError: errorMessage })),
  on(AuthActions.startSignup, state => ({ ...state, isLoading: true })),
  on(AuthActions.signupSuccess, (state, { user }) => ({ ...state, isLoading: false, user })),
  on(AuthActions.signupFailed, (state, { errorMessage }) => ({ ...state, isLoading: false, authError: errorMessage }))
);

export function reducer(state: State, action: Action) {
  return authReducer(state, action);
}
