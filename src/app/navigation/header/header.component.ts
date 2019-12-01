import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app,reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'rr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  @Output() sidenavToggle = new EventEmitter<void>();

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(state => ( !!state.auth.user ));
  }

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  constructor(private store: Store<fromApp.AppState>) {
  }
}
