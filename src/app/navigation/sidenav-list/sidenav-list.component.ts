import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'rr-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent {

  @Output() sidenavClosed = new EventEmitter<void>();

  constructor() { }

  onSidenavClose() {
    this.sidenavClosed.emit();
  }

  onLogout() {
    console.error('Not implemented: Logout()');
  }
}
