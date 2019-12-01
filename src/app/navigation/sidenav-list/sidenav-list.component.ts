import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app,reducer';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'rr-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  @Output() sidenavClosed = new EventEmitter<void>();

  onSidenavClose() {
    this.sidenavClosed.emit();
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  constructor(private store: Store<fromApp.AppState>) { }
}
