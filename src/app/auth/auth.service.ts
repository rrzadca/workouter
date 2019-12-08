import {Injectable} from '@angular/core';
import {Credentials} from './models/credentials.model';
import {AngularFireAuth} from '@angular/fire/auth';
import {Store} from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';
import UserCredential = firebase.auth.UserCredential;

@Injectable({ providedIn: 'root'})
export class AuthService {

  initAuthenticationListener(): void {
    this.angularFireAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(AuthActions.loginSuccess({ email: user.email }));
      } else {
        this.store.dispatch(AuthActions.logout());
      }
    });
  }

  signup(credentials: Credentials): Promise<UserCredential> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  login(credentials: Credentials): Promise<UserCredential> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  constructor(private angularFireAuth: AngularFireAuth,
              private store: Store<fromApp.AppState>) {}
}
