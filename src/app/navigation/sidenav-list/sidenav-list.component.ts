import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app,reducer';
import * as AuthActions from '../../auth/store/auth.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'rr-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  @Output() sidenavClosed = new EventEmitter<void>();

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(state => ( !!state.auth.user ));
  }

  onSidenavClose() {
    this.sidenavClosed.emit();
  }

  onLogout() {
    this.store.dispatch(AuthActions.logout());
  }

  constructor(private store: Store<fromApp.AppState>) { }
}
