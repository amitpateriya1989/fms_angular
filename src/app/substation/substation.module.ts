import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubstationListComponent } from './substation-list/substation-list.component';
import { SubstationAddComponent } from './substation-add/substation-add.component';
import { SubstationEditComponent } from './substation-edit/substation-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatNativeDateModule,MatIconModule,MatButtonModule, MatTableModule,
  MatCheckboxModule, MatToolbarModule, MatCardModule,MatFormFieldModule,MatInputModule,
  MatRadioModule,MatListModule,MatSelectModule} from  '@angular/material';
  import {MatDatepickerModule} from  '@angular/material/datepicker';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SubstationListComponent, SubstationAddComponent, SubstationEditComponent],
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
  ],
  exports:[
    SubstationListComponent, SubstationAddComponent, SubstationEditComponent
  ]
})
export class SubstationModule { }
