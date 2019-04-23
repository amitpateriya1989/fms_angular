import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '../layout/layout.module';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgetPasswordComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    LayoutModule
  ]
})
export class PreloginModule { }
