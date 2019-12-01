import {User} from '../user.model';
import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
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
  on(
    AuthActions.startLogin,
    AuthActions.startSignup,
      state => ({ ...state, isLoading: true })),
  on(
    AuthActions.loginSuccess,
    AuthActions.signupSuccess,
    (state, { user }) => ({ ...state, isLoading: false, user })),
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
export const isAuthenticated = createSelector(getAuthState, state => state.user != null);
