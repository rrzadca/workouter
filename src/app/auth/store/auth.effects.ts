import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {of} from 'rxjs';
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
          .pipe(
            map(response => AuthActions.signupSuccess({ user: { id: response.idToken, email: response.email }})),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(AuthActions.signupFailed({ errorMessage: this.decodeErrorResponse(errorResponse) }));
            })
          )
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
          .pipe(
            map(response => AuthActions.loginSuccess({ user: { id: response.idToken, email: response.email }})),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(AuthActions.loginFailed({ errorMessage: this.decodeErrorResponse(errorResponse)}));
            })
          )
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

  private decodeErrorResponse(errorResponse: HttpErrorResponse): string {
    let errorMessage = 'An unknown error occured!';

    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'Invalid email';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Invalid password';
        break;
    }
    return errorMessage;
  }

  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }
}
