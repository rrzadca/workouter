import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app,reducer';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'rr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() sidenavToggle = new EventEmitter<void>();

  onSidenavToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  constructor(private store: Store<fromApp.AppState>) {
  }
}
