import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './prelogin/login/login.component';
import { RegisterComponent } from './prelogin/register/register.component';
import { ForgetPasswordComponent } from './prelogin/forget-password/forget-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'',component:LoginComponent,pathMatch: 'full'},
  {path:'login',component:LoginComponent,pathMatch: 'full'},
  {path:'register',component:RegisterComponent,pathMatch: 'full'},
  {path:'forget-password',component:ForgetPasswordComponent,pathMatch: 'full'},
  {path:'dashboard',component:DashboardComponent,pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
