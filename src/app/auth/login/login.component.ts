import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app,reducer';
import * as AuthActions from '../store/auth.actions.js';
import {Observable} from 'rxjs';

@Component({
  selector: 'rr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoading$: Observable<boolean>;

  ngOnInit(): void {
    this.isLoading$ = this.store.select(store => store.auth.isLoading);
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(AuthActions.startLogin( { email: form.value.email, password: form.value.password }));
  }

  constructor(private store: Store<fromApp.AppState>) {}
}
