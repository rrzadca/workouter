import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {AuthResponse} from './models/auth-response.model';
import {environment} from '../../environments/environment';

@Injectable({ providedIn: 'root'})
export class AuthService {

  private readonly signupUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`;

  constructor(private http: HttpClient) {}

  signup(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.signupUrl, {
      email,
      password,
      returnSecureToken: true
    });
  }
}
