import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeederListComponent } from './feeder-list/feeder-list.component';
import { FeederAddComponent } from './feeder-add/feeder-add.component';
import { FeederEditComponent } from './feeder-edit/feeder-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule} from  '@angular/material';
  import {MatDatepickerModule} from  '@angular/material/datepicker';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FeederListComponent, FeederAddComponent, FeederEditComponent],
  imports: [
    CommonModule,
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
    LayoutModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeederModule { }
