import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './prelogin/login/login.component';
import { RegisterComponent } from './prelogin/register/register.component';
import { ForgetPasswordComponent } from './prelogin/forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubstationListComponent } from './substation/substation-list/substation-list.component';
import { SubstationAddComponent } from './substation/substation-add/substation-add.component';
import { SubstationEditComponent } from './substation/substation-edit/substation-edit.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'register',component:RegisterComponent,pathMatch: 'full'},
  {path:'forget-password',component:ForgetPasswordComponent,pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch: 'full'},
  {path:'substation-list',component:SubstationListComponent,pathMatch: 'full'},
  {path:'substation-add',component:SubstationAddComponent,pathMatch: 'full'},
  {path:'substation-edit',component:SubstationEditComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
