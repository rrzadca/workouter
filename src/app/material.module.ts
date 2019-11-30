import {NgModule} from '@angular/core';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';

const commonModules = [
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule
];

@NgModule({
  imports: [
    commonModules
  ],
  exports: [
    commonModules
  ]
})
export class MaterialModule {}
