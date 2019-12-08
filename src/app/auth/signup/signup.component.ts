import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/app.reducer';
import * as AuthActions from '../store/auth.actions';
import {Observable, Subscribable, Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {MessageDialogComponent} from '../../shared/message-dialog/message-dialog.component';

@Component({
  selector: 'rr-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  isLoading$: Observable<boolean>;
  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
    this.isLoading$ = this.store.select(store => store.auth.isLoading);

    this.subscription = this.store.select(store => store.auth.authError).subscribe(error => {
      const dialogRef = this.dialog.open(MessageDialogComponent, { data: error });
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.startSignup({
      email: this.form.value.email,
      password: this.form.value.password
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private initForm(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [ Validators.email, Validators.required ]),
      password: new FormControl(null, Validators.required)
    });
  }

  constructor(private store: Store<fromRoot.AppState>,
              private dialog: MatDialog) {}
}
