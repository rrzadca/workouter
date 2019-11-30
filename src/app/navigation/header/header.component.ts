import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
    console.error('Not implemented: Logout()');
  }
}
