import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';

const COMMON_IMPORTS = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  BrowserAnimationsModule,
  ReactiveFormsModule,
  HttpClientModule,
  AngularFirestoreModule
];

@NgModule({
  declarations: [
    MessageDialogComponent
  ],
  imports: [
    COMMON_IMPORTS
  ],
  exports: [
    COMMON_IMPORTS
  ],
  entryComponents: [
    MessageDialogComponent
  ]
})
export class SharedModule {}
