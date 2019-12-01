import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MessageDialogComponent} from './message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  entryComponents: [
    MessageDialogComponent
  ]
})
export class SharedModule {}