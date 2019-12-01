import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthResponse} from './models/auth-response.model';
import {Credentials} from './models/credentials.model';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class AuthService {

  private readonly signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;
  private readonly loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`;

  signup(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signupUrl, {
      email: credentials.email,
      password: credentials.password,
      returnSecureToken: true
    });
  }

  login(credentials: Credentials): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.loginUrl, {
      email: credentials.email,
      password: credentials.password,
      returnSecureToken: true
    });
  }

  constructor(private http: HttpClient) {}
}
