import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl,FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
import { ZoneService } from 'src/app/services/zone.service';
import { Zone } from 'src/app/model/zone.model';
@Component({
  selector: 'app-substation-add',
  templateUrl: './substation-add.component.html',
  styleUrls: ['./substation-add.component.css']
})
export class SubstationAddComponent implements OnInit {
  substation:FormGroup;
  TotalRow:number;
  addLines=false;
  zones:Zone[];
  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private zoneService:ZoneService
    ) { }

  ngOnInit() {
    this.substation = this.formBuilder.group({
      substationName:['',[Validators.required]],
      substationCode:['',[Validators.required]],
      powerTransformer:['',[Validators.required]],
      incommingLine:['',[Validators.required]],
      zoneCode:['',[Validators.required]],
      itemRows:this.formBuilder.array([this.initItemRow()])
     
      
    });
     
    this.zoneService.getAllZone().subscribe(data=>{
      this.zones=data;
      console.log(this.zones);
    });
  }
  initItemRow(){
    return this .formBuilder.group({
      name:['']
    })
    
  }
  back(){
    this.router.navigate(['dashboard']);
  }
  addNewRow(){
    const control=<FormArray>this.substation.controls['itemRows'];
    console.log("add:"+control.value.length);
    control.push(this.initItemRow());

  }
  deleteRow(){
    this.addLines=false;
    const control=<FormArray>this.substation.controls['itemRows'];
    if(control!=null){
      this.TotalRow= control.value.length;
      console.log("delete:"+this.TotalRow);
    }
    
    var i:number=0;
    for (i;i<=this.TotalRow;i++){
      control.removeAt(i);
    }
  
    
  }
 
 
  addFeeder(){
    this.deleteRow();
    this.addLines=true;
    var i:number=1;
  
    for(i;i<this.substation.value.incommingLine;i++){
      this.addNewRow();
    }
  }
}
