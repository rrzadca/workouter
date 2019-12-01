import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../store/app,reducer';
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

  constructor(private store: Store<fromRoot.AppState>,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(store => store.auth.isLoading);

    this.subscription = this.store.select(store => store.auth.authError).subscribe(error => {
      const dialogRef = this.dialog.open(MessageDialogComponent, { data: error });
    });
  }

  onSubmit(form: NgForm) {
    this.store.dispatch(AuthActions.startSignup({
      email: form.value.email,
      password: form.value.password
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
