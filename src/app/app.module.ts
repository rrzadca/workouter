import {AngularFireModule} from '@angular/fire';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {environment} from '../environments/environment';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HeaderComponent} from './navigation/header/header.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {AuthModule} from './auth/auth.module';
import {AuthRoutingModule} from './auth/auth-routing.module';
import {AuthEffects} from './auth/store/auth.effects';
import {ExerciseEffects} from './settings/exercises/store/exercise.effects';
import {SettingsComponent} from './settings/settings.component';
import * as fromApp from './store/app.reducer';
import {ExercisesModule} from './settings/exercises/exercises.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    WorkoutsComponent,
    SettingsComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AuthRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    StoreModule.forRoot(fromApp.appReducer, {
      runtimeChecks: {
        strictActionImmutability: true,
        strictActionSerializability: true,
        strictStateImmutability: true,
        strictStateSerializability: true
      }
    }),
    EffectsModule.forRoot([AuthEffects, ExerciseEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    ExercisesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
