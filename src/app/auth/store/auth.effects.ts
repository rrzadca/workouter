import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {Credentials} from '../models/credentials.model';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  authSignup$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.startSignup),
      map(action => ({ email: action.email, password: action.password } as Credentials)),
      mergeMap(credentials =>
        this.authService
          .signup(credentials)
          .then(userCredentials => {
            return AuthActions.signupSuccess({ email: userCredentials.user.email });
          })
          .catch(errorResponse => {
            return AuthActions.signupFailed({ errorMessage: errorResponse.message});
          })
      )
    )
  );

  authLogin$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.startLogin),
      map(action => ({ email: action.email, password: action.password } as Credentials)),
      mergeMap(credentials =>
        this.authService
          .login(credentials)
          .then(userCredentials => {
            return AuthActions.loginSuccess({ email: userCredentials.user.email });
          })
          .catch(errorResponse => {
            return AuthActions.loginFailed({ errorMessage: errorResponse.message});
          })
      )
    )
  );

  authLogout$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.router.navigate(['/login']);
      })
    ),
    { dispatch: false }
  );

  authRedirect$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.loginSuccess, AuthActions.signupSuccess),
      tap(() => {
        this.router.navigate(['/workouts']);
      })
    ),
    { dispatch: false }
  );

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }
}
