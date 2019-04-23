import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleComponent } from './circle/circle.component';
import { ZoneComponent } from './zone/zone.component';
import { DivisionComponent } from './division/division.component';

@NgModule({
  declarations: [CircleComponent, ZoneComponent, DivisionComponent],
  imports: [
    CommonModule
  ]
})
export class LocationModule { }
