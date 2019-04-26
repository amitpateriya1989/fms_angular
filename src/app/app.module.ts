import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloginModule } from './prelogin/prelogin.module';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule} from  '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';
import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubstationModule } from './substation/substation.module';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
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
    AppRoutingModule,
    PreloginModule,
    LayoutModule,
    SubstationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
