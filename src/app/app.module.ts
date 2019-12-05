import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {AuthModule} from './auth/auth.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {environment} from '../environments/environment';
import {AuthEffects} from './auth/store/auth.effects';
import * as fromApp from './store/app.reducer';
import {SettingsModule} from './settings/settings.module';
import {ExerciseEffects} from './settings/exercises/store/exercise.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WorkoutsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    SettingsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([AuthEffects, ExerciseEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
