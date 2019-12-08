import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions.js';
import {Observable, Subscription} from 'rxjs';
import {MessageDialogComponent} from '../../shared/message-dialog/message-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'rr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  isLoading$: Observable<boolean>;
  form: FormGroup;

  ngOnInit(): void {
    this.formInit();
    this.isLoading$ = this.store.select(store => store.auth.isLoading);

    this.subscription = this.store.select(store => store.auth.authError).subscribe(error => {
      if (error) {
        const dialogRef = this.dialog.open(MessageDialogComponent, {data: error});
      }
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.startLogin( {
      email: this.form.value.email,
      password: this.form.value.password
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private formInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null, Validators.required)
    });
  }

  constructor(private store: Store<fromApp.AppState>,
              private dialog: MatDialog) {}
}
