import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './prelogin/login/login.component';
import { RegisterComponent } from './prelogin/register/register.component';
import { ForgetPasswordComponent } from './prelogin/forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubstationListComponent } from './substation/substation-list/substation-list.component';
import { SubstationAddComponent } from './substation/substation-add/substation-add.component';
import { SubstationEditComponent } from './substation/substation-edit/substation-edit.component';
import { FeederListComponent } from './feeder/feeder-list/feeder-list.component';
import { FeederAddComponent } from './feeder/feeder-add/feeder-add.component';
import { FeederEditComponent } from './feeder/feeder-edit/feeder-edit.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'register',component:RegisterComponent,pathMatch: 'full'},
  {path:'forget-password',component:ForgetPasswordComponent,pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch: 'full',canActivate: [AuthGuard]},
  {path:'substation-list',component:SubstationListComponent},
  {path:'substation-add',component:SubstationAddComponent,pathMatch: 'full',canActivate: [AuthGuard]},
  {path:'substation-edit',component:SubstationEditComponent,pathMatch: 'full',canActivate: [AuthGuard]},
  {path:'feeder-list',component:FeederListComponent,pathMatch: 'full',canActivate: [AuthGuard]},
  {path:'feeder-add',component:FeederAddComponent,pathMatch: 'full',canActivate: [AuthGuard]},
  {path:'feeder-edit',component:FeederEditComponent,pathMatch: 'full',canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
