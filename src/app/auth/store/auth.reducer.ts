import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  isAuthenticated: boolean;
  isLoading: boolean;
  authError: string;
}

export const initialState: State = {
  isAuthenticated: false,
  isLoading: false,
  authError: null
};

const authReducer = createReducer(
  initialState,
  on(
    AuthActions.startLogin,
    AuthActions.startSignup,
      state => ({ ...state, isLoading: true, authError: null })),
  on(
    AuthActions.loginSuccess,
    AuthActions.signupSuccess,
      state => ({ ...state, isLoading: false, isAuthenticated: true, authError: null })),
  on(
    AuthActions.loginFailed,
    AuthActions.signupFailed,
    (state, { errorMessage }) => ({ ...state, isLoading: false, authError: errorMessage })),
  on(
    AuthActions.logout,
    () => ({ ...initialState }))
);

export function reducer(state: State, action: Action) {
  return authReducer(state, action);
}

export const getAuthState = createFeatureSelector<State>('auth');
export const isAuthenticated = createSelector(getAuthState, state => state.isAuthenticated);
