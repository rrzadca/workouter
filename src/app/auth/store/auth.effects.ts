import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AuthService} from '../auth.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {error} from 'util';

@Injectable()
export class AuthEffects {

  authSignup$ = createEffect(
    () => this.actions$.pipe(
      ofType(AuthActions.startSignup),
      mergeMap(action =>
        this.authService
          .signup(action.email, action.password)
          .pipe(
            map(response => AuthActions.signupSuccess({ user: { id: response.idToken, email: response.email }})),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(AuthActions.signupFailed({ errorMessage: this.handleErrors(errorResponse) }));
            })
          )
      )
    )
  );

  private handleErrors(errorResponse: HttpErrorResponse): string {
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
              private authService: AuthService) {
  }
}
