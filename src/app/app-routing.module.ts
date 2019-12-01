import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {WorkoutsComponent} from './workouts/workouts.component';
import {AuthGuard} from './auth/auth-guard.service';


const routes: Routes = [
  { path: '', redirectTo: '/workouts', pathMatch: 'full' },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'workouts', component: WorkoutsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
